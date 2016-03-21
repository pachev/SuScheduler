angular.module('starter.controllers', [])

.controller('IntroCtrl', function($scope, localStorage, $state) {
    $scope.firstRun = localStorage.get('firstRun', true);

    if ($scope.firstRun === true) {
    } else {
        $state.go('/tab/dash');
    }

    /**
     * Authenticates a user
     * @param {object} auth - The authentication token or object
     * @returns {object} - User auth token
     */
    $scope.authenticate = function(auth) {

    };

    $scope.test = function(num) {
        return num;
    };
})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
