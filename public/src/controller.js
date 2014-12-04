angular.module('ContactsApp')
  .controller('ListController', function ($scope, Contact) {
    // Using the Contact resource which is fetched from the Bourne store.
    $scope.contacts = Contact.query();
    $scope.field = ['firstName', 'lastName'];

    $scope.sort = function (field) {
      $scope.sort.field = field;
      $scope.sort.order = !$scope.sort.order;
    };

    $scope.sort.field = 'firstName';
    $scope.sort.order = false;
  });
