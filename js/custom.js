App = angular.module("testApp", ['ngRoute','ngAnimate']);

App.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainCtrl'
        })
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutCtrl'
        })
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactCtrl'
        })
        .otherwise({redirectTo: '/contact'})

})

App.controller('mainCtrl', function ($scope) {
    $scope.pageClass = 'page-home';
    $scope.books = ['c','angular','java','php','jQuery','rdbms','mongo','backbon','.net'];
    
});
App.controller('aboutCtrl', function ($scope,$routeParams) {
    $scope.pageClass = 'page-about';
    
});
App.controller('contactCtrl', function ($scope) {
    $scope.pageClass = 'page-contact';
});


