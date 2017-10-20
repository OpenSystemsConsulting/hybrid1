angular.module('tnf.IonicUtils', ['ionic'])
  .directive('tnfSignaturePad', function ($ionicModal) {
	var canvas = null,
	  ratio = 1.0;

	return {
	  scope: {
		signature: '=ngModel',
		id: '@signatId',
		callback: '&mySaveCallback',
		data: '=myKey',
		podname: '=podName',
		//buttonlabel: '=buttonLabel',
		checkOkForSignat: '=',
		accessor: '='
	  },



	  link: function ($scope, $element, $attrs, $controller) {


		$scope.$on('BarcodeScanOff',function(event,data){
            $scope.openSignatureModal();
        });

		if( $scope.accessor) {
			$scope.accessor.openSignatureModal = function() {
				$scope.openSignatureModal();
			}
		}

		$scope.signaturePadModel = {};
		$scope.signaturePadModel.podname = "";
		$scope.buttonLabel = 'Tap to sign';

/*
		if( typeof buttonlabel !== 'undefined') {
			$scope.buttonlabel = buttonlabel || 'Tap to sign';
		}
		else {
			$scope.buttonlabel = 'Tap to sign';
		}
*/

		// This is the template with the canvas element where we can draw the signature
		$ionicModal.fromTemplateUrl('components/signature_pad/signaturePad.html', {
		  animation: 'slide-in-up',
		  scope: $scope,
		}).then(function(modal) {
		  $scope.signatureModal = modal;
		});

		$scope.$on('$destroy', function () {
			if(typeof $scope.signatureModal !== 'undefined')
			  $scope.signatureModal.remove();
		});

		$scope.openSignatureModal = function () {

			// Check if OK to do this - optional function supplied to directive
			if($scope.checkOkForSignat) {
				if(!$scope.checkOkForSignat($scope.data)) {
					return;
				}
			}

			// if signat exists in local storage use it
			//$scope.signature.image = localStorage.getItem( "signature");
			$scope.signature = localStorage.getItem( "signature");

			$scope.signatureModal.show();
			//canvas = angular.element($scope.signatureModal.modalEl).find('canvas')[0];

			// $scope.signatureModal.modalEl above was null so we never got a 'canvas'
			// TODO - find best way to get canvas element in angular/ionic
			canvas = document.getElementById("signature-canvas");

		  $scope.signaturePad = new SignaturePad(canvas, {
			backgroundColor: '#FFF',
			minWidth: 1,
			maxWidth: 1.5,
			dotSize: 3,
			penColor: 'rgb(66, 133, 244)',
			onEnd: function () {
			  //$scope.signature.image = $scope.signaturePad.toDataURL();
			  $scope.signature = $scope.signaturePad.toDataURL();
			}
		  });

		  if ($scope.signature) {
			//$scope.signaturePad.fromDataURL($scope.signature.image);
			$scope.signaturePad.fromDataURL($scope.signature);
		  }
		  $scope.resizeCanvas();
		  $scope.signaturePadModel.podname = "";
		  //$scope.$apply();
		};

		$scope.resizeCanvas = function () {
		  var ratio = 1.0;
		  canvas.width = canvas.offsetWidth * ratio;
		  canvas.height = canvas.offsetHeight * ratio;
		  canvas.getContext('2d').scale(ratio, ratio);			
		};

		$scope.clear = function () {
		  $scope.signaturePadModel.signatureConfirm = false;
		  $scope.signaturePad.clear();
		  //$scope.signature.image = null;
		  $scope.signature = null;
		
			// TODO - this is called when 'cancel' button is pressed 
			// so probably shouldn't remove from storage on cancel, on clear only
			localStorage.removeItem( "signature");
		  $scope.signaturePadModel.podname = "";
		  //$scope.$apply();
		};

		$scope.save = function () {
			// TODO - store in local storage - job data as key
			//localStorage.setItem( "signature", $scope.signature.image);
		  
		  $scope.podname = $scope.signaturePadModel.podname;

		  $scope.signaturePadModel = {};
		  $scope.signatureModal.hide();
		  $scope.callback({podname:$scope.podname});
		};
	  },
	  require: 'ngModel',
	  replace: true,
	  restrict: 'EA',
		// This is the "Tap to sign" or "Edit Signature" template
	  templateUrl: 'components/signature_pad/signaturePadButton.html'
	};
  });
