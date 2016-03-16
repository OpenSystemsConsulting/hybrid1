'use strict';

angular.module('ImageCtrl', [])
	.controller('ImageCtrl', [ '$rootScope', '$scope', 'imageService',
		function ($rootScope, $scope, imageService) {

			$scope.images = imageService.getFileList();
			console.log($scope.images);

		}
])
