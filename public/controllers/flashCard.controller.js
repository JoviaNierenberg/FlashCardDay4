app.controller('FlashCardCtrl', function ($scope, ScoreFactory, NewCardFactory, FlashCardFactory, $http) {
    $scope.answered = false;
    $scope.answeredCorrectly = null;
    $scope.cardInEditMode = {
        question: null,
        category: null,
        answers: [
            { text: null, correct: false },
            { text: null, correct: false },
            { text: null, correct: false }
        ]
    }

    // $scope.flashCards = FlashCardFactory.flashCards

    // $scope.editIt = function (card) {
    //   // return NewCardFactory.editIt(card)
    //   // .then(function(card) {
    //   // })
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

    $scope.editPopulate = function(_id){
      console.log("_id:", _id)
      $http.get('/edit/' + _id)
          .then(function (res) {
            console.log("res.data: ", res.data)
            console.log("res.data.question: ", res.data.question)

            $scope.cardInEditMode.question = res.data.question

      })
    }

    
  })