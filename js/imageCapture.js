angular.module('imageCapture', [])
	.directive('camera',[ '$cordovaFile','$ionicModal',function($cordovaFile,$ionicModal) {
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

				function storeImage(legid, imageURI) {
					var ls_fname;

					ls_fname = legid + "-" + ctr + ".img";

					//$cordovaFile.checkFile(cordova.file.dataDirectory, ls_fname);

					$cordovaFile.writeFile(cordova.file.dataDirectory, ls_fname, imageURI, false).then(function (success) {
						// success
						alert("Just Stored [" + ls_fname + " In " + cordova.file.dataDirectory);
						getNotesForImage(legid);
						return 0;

					}, function (error) {
						if(error.code == FileError.PATH_EXISTS_ERR) {
							// already exists so try and store again
							ctr++;
							storeImage(legid, imageURI);
						}
						else {
							alert("FAILED to store [" + ls_fname + " In " + cordova.file.dataDirectory + " please contact your support");
						}
					});
				}


				$scope.takephoto = function (legid) {


					navigator.camera.getPicture(function (imageURI) {
						// TODO - place picture on form
						// TODO - get some optional notes
						// TODO - get confirmation all ok
						// TODO - save the picture - use imageId

						storeImage(legid, imageURI);

						/*
						while((storeImage(legid, imageURI)) == FileError.PATH_EXISTS_ERR )
						{
							ctr++;
							if(ctr > 99 )
							{
								alert("Too many Photos stored for one job , please get help");
								break;
							}
						}
						*/

						}, function (err) {
							alert(err);
						},
						{
							//Properties / options object
							quality: 50, destinationType: Camera.DestinationType.DATA_URL
						});

				}
			 }
		  }
	}]);
