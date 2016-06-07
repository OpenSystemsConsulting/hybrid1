//function InstallationsController($scope, $http) {
angular.module('installations', [])

.controller('installations', ['$scope', '$http', 'siteService', function($scope, $http, siteService) {

	var serverIP = siteService.getServerIP();
	var serverPort = siteService.getServerPort();

    $http.get('http://'+ serverIP + ':' + serverPort + '/api/installations').success(function (data) {
        $scope.devices = data;
        $scope.orderProp = 'appId';
    });

    $scope.notify = function (id, msg) {
        $http.post('http://'+ serverIP + ':' + serverPort + '/notify/' + encodeURIComponent(id), {msg: msg}).success(function (data, status, headers) {
            $scope.status = 'Notification sent: ' + data + ' status: ' + status;
        });
    };

    $scope.delete = function (index, id) {
        $http.delete('http://'+ serverIP + ':' + serverPort + '/api/installations/' + encodeURIComponent(id)).success(function (data, status, headers) {
			$scope.devices.splice(index, 1);
			$scope.status = 'Record deleted: ' + id + ' status: ' + status;
        });
    };


  $scope.getAction = function (status) {
        return 'Active' === status ? 'Deactivate' : 'Activate';
    };

    $scope.switchStatus = function (device) {
        var newStatus = 'Active' === device.status ? 'Inactive' : 'Active';
        //console.log('Setting status to '+newStatus);
        device.status = newStatus;
        $http.put('http://'+ serverIP + ':' + serverPort + '/api/installations/' + encodeURIComponent(device.id), device ).success(function (data, status, headers) {
            $scope.status = 'Status changed: ' + data + ' status: ' + status;
        });
    };
}]);
