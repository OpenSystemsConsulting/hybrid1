angular.module('applications', [])
//function ApplicationsController($scope, $http) {
.controller('applications', ['$scope', '$http', 'clientConfig', function($scope, $http, clientConfig) {

var myIpaddress = 'opensyscon.com.au';
//var myIpaddress = 'scope.opensyscon.com.au/scope/';
//var myIpaddress = 'swiftt1.lnk.telstra.net';
var myPort = 3000;

  $scope.load = function () {
    $http.get('http://' + clientConfig.serverIP + ':' + clientConfig.serverPort + '/api/applications').success(function (data) {
      //console.log(data);
      $scope.apps = data;
      $scope.orderProp = 'id';
    });
  };

  $scope.create = function () {
    $http.post('http://' + clientConfig.serverIP + ':' + clientConfig.serverPort + '/api/applications',
      {
        name: $scope.name,
        description: $scope.description,
        pushSettings: {
          apns: {
            certData: $scope.certData,
            keyData: $scope.keyData
          },
          gcm: {
            serverApiKey: $scope.gcmKey
          }
        }
      })
      .success(function (data, status, headers) {
        // console.log(data, status);
        $scope.id = 'Application Id: ' + data.id;
        $scope.restApiKey = 'Application Key: ' + data.restApiKey;
      });
  };

  $scope.delete = function (index, id) {
    $http.delete('http://' + clientConfig.serverIP + ':' + clientConfig.serverPort + '/api/applications/' + encodeURIComponent(id)).success(function (data, status, headers) {
      $scope.apps.splice(index, 1);
      $scope.status = 'Application deleted: ' + id + ' status: ' + status;
    });
  };
}]);
