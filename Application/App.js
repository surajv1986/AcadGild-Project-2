angular.module('RideApp',['ui.bootstrap','ui.router'])
.config(['$stateProvider, $urlRouterProvider', function($stateProvider, $urlRouterProvider){

   $stateProvider
    .state('Home', {
      url: "/Home",
      templateUrl: "partials/Home.html",
      controller:"SearchCtrl"
    })

    $stateProvider
    .state('Dashboard.html', {
      url: "/Dashboard.html",
      templateUrl: "partials/Dashboard.html"
    })

    $stateProvider.otherwise('/Home');

 }
]);



