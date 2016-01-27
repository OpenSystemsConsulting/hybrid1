'use strict';

angular.module('BarcodeCtrl', [])
.controller('BarcodeCtrl', [ '$rootScope', '$scope', '$cordovaBarcodeScanner', 'cordovaReady', 'Logger', 'pdaParams',
	function ($rootScope, $scope, $cordovaBarcodeScanner, cordovaReady, Logger, pdaParams) {

		var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'BarcodeCtrl'};
		var log = Logger.getInstance(logParams);

		var barcodes = [];

		$scope.barcodes = barcodes ;

		$scope.scan = function () {

			if( cordovaReady.isready) {

				$cordovaBarcodeScanner
				  .scan()
				  .then(function(barcodeData) {
					// Success! Barcode data is here
					// Returns object e.g.: {text: "053329109558", format: "UPC_A", cancelled: false}
					barcodes.push(barcodeData.text);

					log.debug('scanned OK: barcodeData:'+barcodeData);
					
				  }, function(error) {
					// An error occurred
				  })

			}
			else {
				alert('cordova NOT ready');
			}
			
		};

	}
])
