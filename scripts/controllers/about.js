'use strict';

/**
 * @ngdoc function
 * @name nomelistaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nomelistaApp
 */
angular.module('nomelistaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
