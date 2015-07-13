app.controller('FlashCardCtrl', function ($scope, ScoreFactory, NewCardFactory) {
    $scope.answered = false;
    $scope.answeredCorrectly = null;


    // $scope.editIt = function (card) {
    //   return NewCardFactory.editIt(card)
    //   .then(function(card) {
    //   })
    // }

    $scope.answerQuestion = function(answer) {
      if($scope.answered) {
        return;
      }
      $scope.answered = true;
      if(answer.correct) {
        ScoreFactory.correct++;
        $scope.feedback = "Correct!";
        $scope.answeredCorrectly = true;
      } else {
        ScoreFactory.incorrect++;
        $scope.feedback = "Nice try";
      }
    };

    
  })