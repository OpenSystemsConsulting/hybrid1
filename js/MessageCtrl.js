'use strict';

angular.module('MessageCtrl', [])
	.controller('MessageCtrl', [ '$rootScope', '$scope', 'messageService',
		function ($rootScope, $scope, messageService) {

			$scope.messages = messageService.getMessages();

			$scope.$on("$destroy", function() {
				// Reset new message count now they have been viewed
				messageService.resetNewMessageCount();
			});
		}
])
