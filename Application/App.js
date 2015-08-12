var myRideApp=angular.module('RideApp',['ui.bootstrap','ui.router']);

myRideApp.config( function($stateProvider, $urlRouterProvider){

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
   
   $urlRouterProvider.otherwise('/Home');

  }
);



