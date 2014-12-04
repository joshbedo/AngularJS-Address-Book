angular.module('ContactsApp', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/contacts', {
        controller: 'ListController',
        templateUrl: 'views/list.html'
      });

    $locationProvider.html5Mode(true);
  })
  .run(function ($rootScope) {
    $rootScope.message = "Yo, Angular!";
  });
