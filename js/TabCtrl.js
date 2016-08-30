angular.module('TabCtrl', [])

.controller('TabCtrl', function( $scope, siteConfig) {

	// TODO - work out best method to display tabs via site config
	// When using an async call does not appear to have an effect (value set too late?)
	// When using a direct assignment of true/false appears to work as required
/*
	$scope.displayBarcodeTab = function () {
			siteConfig.getSiteConfigYN('PDA_BARCODES').then(function(YN) {
				if(YN == "Y")
					return true;
				else
					return false;
			});
	}
*/
	$scope.displayBarcodeTab = showBarcodeTab();

	function showBarcodeTab () {
/*
		siteConfig.getSiteConfigYN('PDA_BARCODES').then(function(YN) {
			if(YN == "Y")
				return true;
			else
				return false;
		});
*/
		// TODO - return true initially until we work out site specific stuff
		return true;

		var YN = localStorage.getItem('PDA_BARCODES');
		if(YN == "Y")
			return true;
		else
			return false;
	}

});
