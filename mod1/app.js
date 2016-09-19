(function () {
'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
      $scope.message = "Loading....";

      $scope.checkFood = function() {
        if ($scope.lunchMenu) {
          $scope.color = "green";
          var len = $scope.lunchMenu.split(",").length;
          if (len <= 3) {
            $scope.message = "Enjoy!";
          }
          else {
            $scope.message = "Too much!";
          }
        }
        else {
          $scope.color = "red";
          $scope.message = "Please enter data first";
        }
        $scope.lunchMenu = "";
      }
    }
})()
