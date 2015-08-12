var myRideApp=angular.module('RideApp',['ui.bootstrap','ui.router']);

myRideApp.config( function($stateProvider, $urlRouterProvider){

   $stateProvider
    .state('Home', {
      url: "/Home",
      templateUrl: "Partials/Home.html",
      controller:"SearchCtrl"
    })

    $stateProvider
    .state('Dashboard', {
      url: "/Dashboard",
      templateUrl: "Partials/Dashboard.html"
    })
   
   $urlRouterProvider.otherwise('/Home');

  }
);



