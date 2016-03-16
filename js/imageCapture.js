angular.module('imageCapture', [])
	.directive('camera',[ '$cordovaFile','$ionicModal','$rootScope',function($cordovaFile,$ionicModal,$rootScope) {
	return {
			restrict: 'EA',
			scope: true,
			template: '<button ng-model="myPicture" class="button button-energized floatLeft" ng-click="takephoto(property.legid)"> Photos </button>',
			controller: function($scope, $element){
				var ctr=1;

				$scope.save = function () {
					alert("In modal.save");

					// TODO - need to save

					// close after saving
					$scope.modal.hide();
				};

				// modal window to update driver no
				$ionicModal.fromTemplateUrl('templates/imagetext.html', {
					scope: $scope
				}).then(function(modal) {
					$scope.modal = modal;
					$scope.photoMessage = {};
					$scope.photoMessage.text = "";
				});

				// function to open the modal
				$scope.openModal = function () {
					$scope.modal.show();
				};

				// function to close the modal
				$scope.closeModal = function () {
					$scope.modal.hide();
				};

				//Cleanup the modal when we're done with it!
				$scope.$on('$destroy', function() {
					$scope.modal.remove();
				});
				$scope.clear = function () {
					$scope.photoMessage.text = "";
        		};

				function getNotesForImage(legid) {
					$scope.openModal();
				}

				function storeImageData(legid, imageData) {
					var ls_fname;

					ls_fname = legid + "-" + ctr + ".img";

					//$cordovaFile.checkFile(cordova.file.dataDirectory, ls_fname);

					$cordovaFile.writeFile(cordova.file.dataDirectory, ls_fname, imageURI, false).then(function (success) {
						// success
						alert("Just Stored [" + ls_fname + " In " + cordova.file.dataDirectory);
						getNotesForImage(legid);

						// TODO - when we are finally happy all is saved then maybe broadcast an event for imageService?
						// $rootScope.broadcast(???);

						return 0;

					}, function (error) {
						if(error.code == FileError.PATH_EXISTS_ERR) {
							// already exists so try and store again
							ctr++;
							storeImageData(legid, imageURI);
						}
						else {
							alert("FAILED to store [" + ls_fname + " In " + cordova.file.dataDirectory + " please contact your support");
						}
					});
				}

				function dirname(path) {
					return path.replace(/\/[^\/]*$/,'');
				}

				function storeImageURI(legid, imageURI) {
					//Grab the file name of the photo in the temporary directory
					var currentName = imageURI.replace(/^.*[\\\/]/, '');

					//Create a new name for the photo
					var d = new Date(),
						n = d.getTime(),
						newFileName = legid + "_" + n + ".jpg";

					// TODO - derive this from the imageURI ?
					//var currentDirectory = cordova.file.externalRootDirectory + "Pictures/";		// Android only
					var currentDirectory = dirname(imageURI);

					//$cordovaFile.checkFile(cordova.file.dataDirectory, ls_fname);

					$cordovaFile.moveFile(currentDirectory, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
						// success
						alert("Just Stored [" + newFileName + " In " + cordova.file.dataDirectory);
						getNotesForImage(legid);

						// TODO - when we are finally happy all is saved then maybe broadcast an event for imageService?
						// $rootScope.broadcast(???);

						return 0;

					}, function (error) {
						alert("error:"+error);
						alert("FAILED to move [" + cordova.file.dataDirectory + currentName + "] to [" + cordova.file.dataDirectory + newFileName + "]");
					});
				}

				$scope.takephoto = function (legid) {

					navigator.camera.getPicture(function (imageURI) {
						// TODO - place picture on form
						// TODO - get some optional notes
						// TODO - get confirmation all ok
						// TODO - save the picture

						storeImageURI(legid, imageURI);

						}, function (err) {
							alert(err);
						},
						{
							//Properties / options object
							quality: 100,
							destinationType: Camera.DestinationType.FILE_URI,
							sourceType: Camera.PictureSourceType.CAMERA,
							encodingType: Camera.EncodingType.JPEG,
							cameraDirection: 1,
							saveToPhotoAlbum: true
						});

				}
			 }
		  }
	}]);
