'use strict';

var spaApp = angular.module('spaApp', ['ngRoute','ngMd5'])
 
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './app/templates/inicio.html',
            controller: 'InicioCtrl',
 
        })

        .otherwise({
            redirectTo: '/'
        });
        
}])

.config(function($locationProvider) {

    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode({
        enabled: false,
        requireBase: true
    });
});