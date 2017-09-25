'use strict';

// TODO - maybe implement messages per chat type application
// see https://forum.ionicframework.com/t/ionic-elastichat-chat-demo-w-auto-resizing-textarea/13562
// and http://codepen.io/rossmartin/pen/XJmpQr

angular.module('MessageCtrl', [])
	.controller('MessageCtrl', [ '$rootScope', '$scope', 'messageService','siteConfig','$ionicPopup','Logger','pdaParams','driverMessageService',
		function ($rootScope, $scope, messageService, siteConfig,$ionicPopup,Logger,pdaParams,driverMessageService) {

		var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'MessageCtrl'};
		var log = Logger.getInstance(logParams);

			var messageText;
			var boxShow = false;

			//$scope.messages = messageService.getMessages();
			$scope.messages = driverMessageService.getMessages(pdaParams.getDriverId());

			$scope.$on("$destroy", function() {
				// Reset new message count now they have been viewed
				messageService.resetNewMessageCount();
			});

			$scope.$on('messageToDriver', function(event, payload){
				showMessages();
			});

			// Reshow messages as required from callbacks etc.
			function showMessages(err) {
				$scope.messages = driverMessageService.getMessages(pdaParams.getDriverId());
			}

			function showMessageEntryBox(tf)
			{
				boxShow = tf;
				$scope.boxshow = boxShow;
			}

			$scope.newMessage = function ()
			{
				$scope.textareadata = "Input your text here";
				showMessageEntryBox(true);
			}

			$scope.onSubmit = function ()
			{
				messageText = $scope.textareadata;
				driverMessageService.addMessage(pdaParams.getDriverId(),messageText,showMessages);
				showMessageEntryBox(false);
			}

			$scope.deleteAllMessages = function ()
			{
				var confirmPopup = $ionicPopup.confirm({
				title: 'DELETE All messages',
				template: 'Are you sure you want to DELETE All messages?'
				});

				confirmPopup.then(function(res) {
					if(res) {
						log.debug('User has DELETED all messages');

						//barcodes = [];
						//$scope.apply();

						// go back to job list
						return; 
						
					} else {
						log.debug('User has CANCELLED out of DELETE All messages');
					}
				});
			}
			$scope.quit = function ()
			{
				showMessageEntryBox(false);
				window.location.href = "#/tab/jobs";
			}
}]);
