GLClient.controller('PrivacyBoxCtrl',
  ['$scope', '$http', '$rootScope',
  function($scope, $http, $rootScope) {

    $rootScope.privacy = 'unknown';

    /** XXX we are making the *strong* assumption that the GlobaLeaks instances
     *  will only be served as a Tor Hidden Service.
     *  If the address bar contains a hidden service address we consider the
     *  user to be over Tor.
     *  We can make this assumption because globaleaks is to be deployed with in
     *  front of it a tor2web instance (public or private) that will
     *  automatically redirect to the .onion address if it detectes that the
     *  client is coming from Tor.
     **/

    if (window.location.hostname.match(/^[a-z0-9]{16}\.onion$/)) {
      $rootScope.privacy = 'high';
    } else {
      $rootScope.privacy = 'low';
    }

    $scope.displayBox = false;
    $scope.boxes = 'closed';

    $scope.showBox = function() {
      $scope.displayBox = true;
      $scope.boxes = 'open';
    }

    $scope.hideBox = function() {
      $scope.displayBox = false;
      $scope.boxes = 'closed';
    }

    /* I don't know why there are also .boxes var and just the bool,
       but I'm patching, and "when you patch, you're like a chameleon
     */
    $scope.flipBox = function() {
      $scope.displayBox = !$scope.displayBox;
      if ($scope.boxes == 'closed') {
          $scope.boxes = 'open';
      } else {
          $scope.boxed = 'closed';
      }
    }

}]);
