angular.module('SignatureCtrl', []).directive('signature', function ($ionicModal) {
    var canvas = null,
      ratio = 1.0;

	console.log("Now In Signature Directive 1 ");
    return {
      scope: {
        signature: '=ngModel'
      },
      link: function ($scope, $element, $attrs, $controller) {
        $scope.signature = null;
        $scope.signaturePadModel = {};

	console.log("Now In Signature Directive 3 ");
        $ionicModal.fromTemplateUrl('templates/signaturePad.html', {
          animation: 'slide-in-up',
          scope: $scope,
        }).then(function(modal) {
          $scope.signatureModal = modal;
        });

        $scope.$on('$destroy', function () {
          $scope.signatureModal.remove();
        });

	console.log("Now In Signature Directive 4 ");
        $scope.openSignatureModal = function () {
          $scope.signatureModal.show();
          canvas = angular.element($scope.signatureModal.modalEl).find('canvas')[0];

          $scope.signaturePad = new SignaturePad(canvas, {
            backgroundColor: '#FFF',
            minWidth: 1,
            maxWidth: 1.5,
            dotSize: 3,
            penColor: 'rgb(66, 133, 244)',
            onEnd: function () {
              $scope.signature = $scope.signaturePad.toDataURL();
            }
          });

          if ($scope.signature) {
            $scope.signaturePad.fromDataURL($scope.signature);
          }
          $scope.resizeCanvas();
        };
	console.log("Now In Signature Directive 5 ");

        $scope.resizeCanvas = function () {
          canvas.width = canvas.offsetWidth * ratio;
          canvas.height = canvas.offsetHeight * ratio;
          canvas.getContext('2d').scale(ratio, ratio);          
        };

        $scope.clear = function () {
          $scope.signaturePadModel.signatureConfirm = false;
          $scope.signaturePad.clear();
          $scope.signature = null;
        };

        $scope.save = function () {
          $scope.signaturePadModel = {};
          $scope.signatureModal.hide();
        };
      },
      require: 'ngModel',
      replace: true,
      restrict: 'A',
      templateUrl: 'templates/signatureButton.html'
    };
  });
