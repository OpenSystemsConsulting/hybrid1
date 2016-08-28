'use strict';

angular.module('MessageCtrl', [])
	.controller('MessageCtrl', [ '$rootScope', '$scope', 'messageService','siteConfig',
		function ($rootScope, $scope, messageService, siteConfig) {

			$scope.messages = messageService.getMessages();

			$scope.$on("$destroy", function() {
				// Reset new message count now they have been viewed
				messageService.resetNewMessageCount();
			});

			// TEST - check site config
			siteConfig.getSiteConfigYN('PAYADVICES_RANGE_PDF').then(function(YN) {
				$scope.test = YN;
			});
		}
])
