function UserCtrl($scope, $http) {
    var userlist = [];
  var request = $http.get('/users/userlist');   

    request.then(function(data) {
        $scope.userlist = data.data;
    });

    request.error(function(data){
        console.log('Error: ' + data);
    });
}

//add controller to module app
angular.module('testApp').controller('userCtrl', UserCtrl);