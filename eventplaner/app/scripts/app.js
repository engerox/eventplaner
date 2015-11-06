'use strict';

/**
 * @ngdoc overview
 * @name eventplanerApp
 * @description
 * # eventplanerApp
 *
 * Main module of the application.
 */
angular
  .module('eventplanerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/dienste', {
        templateUrl: 'views/dienste.html',
        controller: 'DiensteCtrl',
        controllerAs: 'dienste'
      })
       .when('/registrierung', {
        templateUrl: 'views/registrierung.html',
        controller: 'RegistrierungCtrl',
        controllerAs: 'registrierung'
      })  
       .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })
      .when('/diensteadmin', {
        templateUrl: 'views/diensteadmin.html',
        controller: 'DiensteadminCtrl',
        controllerAs: 'diensteadmin'
      })  
       .when('/eintragen', {
        templateUrl: 'views/eintragen.html',
        controller: 'EintragenCtrl',
        controllerAs: 'eintragen'
      })  
      .otherwise({
        redirectTo: '/'
      });
    
      
  });
