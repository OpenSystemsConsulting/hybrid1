'use strict';

// TODO - maybe implement messages per chat type application
// see https://forum.ionicframework.com/t/ionic-elastichat-chat-demo-w-auto-resizing-textarea/13562
// and http://codepen.io/rossmartin/pen/XJmpQr

angular.module('MessageCtrl', [])
.filter('utcAsLocal', function ($filter) {
	// Query from Oracle returns date type with 'Z' suffix indicating it is UTC time
	// however we have stored it in the DB as local time so need to ensure no local conversion
	return function (utcDateString, format) {
		// return if input date is null or undefined
		if(!utcDateString) {
			return;
		}

		// remove 'Z' at end of string so angular understands this to be local not utc
		if (utcDateString.slice(-1) === 'Z') {
			utcDateString = utcDateString.slice(0,-1);
		}

		// convert and format date using the built in angularjs date filter
		return $filter('date')(utcDateString, format);
	};
})
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
