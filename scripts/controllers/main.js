'use strict';

/**
 * @ngdoc function
 * @name nomelistaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nomelistaApp
 */
angular.module('nomelistaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var meses = [
      'Candidato',
      'Escritor',
      'Atleta',
      'Avião',
      'Escondidinho',
      'Japonês',
      'Roberval',
      'Bessias',
      'Petralha',
      'Mineiro',
      'Baiano',
      'Calabresa'
    ];

    var dias = [
      'Colorido',
      'Oculto',
      'do Cachorrinho',
      'Chato',
      'Indicação',
      'Tranquilo',
      'Diferentão',
      'do Mangue',
      'da Farinha',
      'de SP',
      'do Nacional',
      'do Estadual',
      'do Helicóptero',
      'da Força',
      'da Farsa',
      'da Pérsia',
      'Porcina',
      'da Usabilidade',
      'do Sítio',
      'do Torresmo',
      'de um Terço',
      'Acarajé',
      'Candomblé',
      'Rei Pelé',
      'Batoré',
      'Reeleito',
      'Campeão',
      'do Segundo Turno',
      'Grego',
      'do Viagra',
      'da Federal'
    ];

    $scope.gerar = function(){
      $scope.apelido = meses[(parseInt($scope.mes)-1)]+' '+dias[(parseInt($scope.dia)-1)];
    };

  });
