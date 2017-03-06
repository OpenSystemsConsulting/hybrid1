'use strict';

angular.module('ImageCtrl', [])
	.controller('ImageCtrl', [ '$rootScope', '$scope', 'imageService','imageFileService','fileUpload','$cordovaFileTransfer','$cordovaFile','pda_images','$window','$ionicPopup','pdaParams',
		function ($rootScope, $scope, imageService, imageFileService, fileUpload, $cordovaFileTransfer, $cordovaFile, pda_images, $window, $ionicPopup, pdaParams) {

		var lpda_images = pdaParams.pda_images ? 'Y' : 'N';;
		if(pda_images != 'Y' && lpda_images != 'Y') {
			var alertPopup = $ionicPopup.alert({
				title: 'Module not installed',
				template: 'This module is not installed.'
			});

			alertPopup.then(function(res) {
				$window.history.back();
			});
		} else {
			getImages();
		}
		
		function getImages() {
			imageService.getImageList().then(function(images) {
				// for each of the images retrieved from file system grab any notes
				var len = images.length;
				for( var i = 0; i < len; i++) {
					var notes = imageFileService.get(images[i].name, 'notes');

					if( notes != null) {
						images[i].notes = notes;
					}

					images[i].uploaded = imageFileService.get(images[i].name, 'uploaded');
				}

				$scope.images = images;
				console.log($scope.images);
			});
		}

		$scope.uploadImage = function(image) {
			imageService.uploadImage(image, function(result) {
				getImages();
			}, function(error) {
				// do we care ?
			});
		}

		$scope.deleteImage = function(imageName){
			imageService.deleteSingleImage(imageName).then(function(success) {

				getImages();		// reload images into scope
			}, function(err) {
				console.log(err);
			});
		}	

		$scope.deleteObsoleteImages = function() {
			imageService.deleteObsoleteImages().then(function(success) {
				getImages();
			}, function(err) {
				console.log(err);
			});
		}
	}
])
/*
	.directive('fileModel', ['$parse', function ($parse) {
			return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				var model = $parse(attrs.fileModel);
				var modelSetter = model.assign;
				
				element.bind('change', function(){
					scope.$apply(function(){
						modelSetter(scope, element[0].files[0]);
					});
				});
			}
		};
	}])
*/

