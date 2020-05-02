app.controller('HomeCtrl', ["$scope", "$timeout",
                            function($scope, $timeout) {
  let answers = ["", "57 fqny", "43", "81", "36;6;85;oui", "compiègne", "oui"]
  $scope.step = 0;
  $scope.passengerCount = 0;
  $scope.showMissionAcceptedButton = true;
  $scope.acceptMissionButton = function() {
      console.log("hello");
      $scope.showMissionAcceptedButton = true;
  }
  $scope.changeStep = function(step) {
      $scope.step = step;
  }
  $scope.answer = function(answer, step) {
      if (answers[step] === ("" + answer).toLowerCase()) {
          $scope.step++
      } else {
          showWrongAnswer();
      }
  }

  $scope.answer4thStep = function(a, b, c, d) {
      $scope.answer(a + ";" + b + ";" + c + ";" + d, 4);
  }

  $scope.wrongAnswer = false;
  function showWrongAnswer() {
    $scope.wrongAnswer = true;
    $timeout(function() {
        $scope.wrongAnswer = false;
    }, 3000);
  }

}]);