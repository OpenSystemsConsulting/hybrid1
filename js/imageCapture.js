angular.module('imageCapture', [])
	.directive('cameraButton',[ '$cordovaFile','$ionicModal','$rootScope','pdaParams','$cordovaCamera','imageService','imageFileService','$parse',
		function($cordovaFile,$ionicModal,$rootScope,pdaParams,$cordovaCamera, imageService, imageFileService, $parse) {
	return {
			restrict: 'EA',
			scope: true,
			templateUrl: 'templates/imageCapture.html',
			controller: function($scope, $element, $attrs){

				var cb = $parse($attrs.callback);
				//var metadata = $parse($attrs.metadata);
				var metadata = $parse($attrs['metadata'])($scope);

				console.log(new Date().toISOString()+': camera: starts');		//DEBUG

// Cancel button does clear then hide
//<button class="button" ng-click="clear(); modal.hide()">Cancel</button>

				$scope.save = function () {
					//alert("In modal.save");
					console.log(new Date().toISOString()+': camera.save: starts');		//DEBUG

					// TODO - need to save
					var notes = $scope.photoMessage.text;
					var saveFilename = $scope.baseFileName + ".txt";

					imageFileService.set($scope.newFileName, 'notes', notes);

					// TODO - set ok to upload flag under ALL circumstances

					// close after saving
					$scope.closeModal();

					console.log(new Date().toISOString()+': camera.save: ends');		//DEBUG
				};

				// Create modal window
				$ionicModal.fromTemplateUrl('templates/imagetext.html', {
					scope: $scope
				}).then(function(modal) {
					$scope.modal = modal;
					$scope.photoMessage = {};
					$scope.photoMessage.text = "";
				});

				// function to open the modal
				$scope.openModal = function () {
					console.log(new Date().toISOString()+': camera.openModal: starts');		//DEBUG
					$scope.modal.show();
				};

				// function to close the modal
				$scope.closeModal = function () {

					if($scope.newFileName)
						imageFileService.set($scope.newFileName, 'readyForUpload', true);

					$scope.photoMessage.text = "";
					$scope.modal.hide();
				};

				//Cleanup the modal when we're done with it!
				$scope.$on('$destroy', function() {
					console.log(new Date().toISOString()+': camera.$destroy: starts');		//DEBUG
					$scope.photoMessage.text = "";
					$scope.modal.remove();
					console.log(new Date().toISOString()+': camera.$destroy: ends');		//DEBUG
				});
				$scope.clear = function () {
					$scope.photoMessage.text = "";
        		};

				$scope.$on('modal.hidden', function() {
					// modal closed for some reason - we don't care - mark photo ok to upload
					if($scope.newFileName)
						imageFileService.set($scope.newFileName, 'readyForUpload', true);
				});

				function getNotesForImage(imageURI, legid, baseFileName, newFileName) {
					console.log(new Date().toISOString()+': camera.getNotesForImage`: starts');		//DEBUG
					$scope.imageURI = imageURI;
					$scope.legid = legid;
					$scope.baseFileName = baseFileName;
					$scope.newFileName = newFileName;
					$scope.openModal();
					console.log(new Date().toISOString()+': camera.getNotesForImage`: ends');		//DEBUG
				}


				$scope.takephoto = function (legid) {

					console.log(new Date().toISOString()+': camera.takephoto: starts');		//DEBUG

					imageService.takePhoto(legid).then(function(imageURI) {
						// image successfully captured by device

						imageService.storeImageURI(legid, imageURI, metadata).then(function(fileData) {
							// image moved to app storage
							$scope.$emit('imageSaved',fileData);

							var savedImageURI = fileData.savedImageURI;
							var baseFileName = fileData.baseFileName;
							var newFileName = fileData.newFileName;

							getNotesForImage(savedImageURI, legid, baseFileName, newFileName);

							if(cb) cb($scope,fileData);

						}, function (err) {
							alert(JSON.stringify(err));
						});

					}, function (err) {
						alert(JSON.stringify(err));
					});

					console.log(new Date().toISOString()+': camera.takephoto: ends');		//DEBUG
				}
			 }
		  }
	}]);
