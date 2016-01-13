//function InstallationsController($scope, $http) {
angular.module('installations', [])

.controller('installations', ['$scope', '$http', 'clientConfig',  function($scope, $http, clientConfig) {

 	var myIpaddress = 'scope.opensyscon.com.au/scope/';
	//var myIpaddress = 'swiftt1.lnk.telstra.net';
	var myPort = 3000;

    $http.get('http://'+ clientConfig.serverIP + ':' + clientConfig.serverPort + '/api/installations').success(function (data) {
        $scope.devices = data;
        $scope.orderProp = 'appId';
    });

    $scope.notify = function (id, msg) {
        $http.post('http://'+ clientConfig.serverIP + ':' + clientConfig.serverPort + '/notify/' + encodeURIComponent(id), {msg: msg}).success(function (data, status, headers) {
            $scope.status = 'Notification sent: ' + data + ' status: ' + status;
        });
    };

    $scope.delete = function (index, id) {
        $http.delete('http://'+ clientConfig.serverIP + ':' + clientConfig.serverPort + '/api/installations/' + encodeURIComponent(id)).success(function (data, status, headers) {
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
        $http.put('http://'+ clientConfig.serverIP + ':' + clientConfig.serverPort + '/api/installations/' + encodeURIComponent(device.id), device ).success(function (data, status, headers) {
            $scope.status = 'Status changed: ' + data + ' status: ' + status;
        });
    };
}]);
