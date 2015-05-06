'use strict';

class MainCtrl {
  constructor ($scope, $http) {

    $scope.refreshAudibles = function(term) {
      return $http.get('http://localhost/audibles/search/' + term).then(function(response) {

        return _.take(response.data, 50);
      });
    };
  }
}

MainCtrl.$inject = ['$scope', '$http'];

export default MainCtrl;
