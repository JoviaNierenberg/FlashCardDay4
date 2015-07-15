app.controller('FlashCardCtrl', function ($scope, NewCardFactory, FlashCardFactory, $http) {
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
    };

    // $scope.flashCards = FlashCardFactory.flashCards

    // $scope.editIt = function (card) {
    //   // return NewCardFactory.editIt(card)
    //   // .then(function(card) {
    //   // })
    // }

    $scope.thisCardId = $scope.thisCardId || NewCardFactory.cardId || "It's gone";
    
    $scope.setCardId = function(id){
      $scope.thisCardId.id = id;
      console.log($scope.thisCardId.id);
    };

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

    $scope.doPutRequest = function (card, id) {
      return NewCardFactory.update(card, id)
      .then(function(data){
        console.log("updated card");
      });
    };

    $scope.editPopulate = function(_id){
      console.log("in the function");
      console.log("_id:", _id)
      $http.get('/edit/' + _id)
          .then(function (res) {
            console.log("res.data: ", res.data)
            console.log("res.data.question: ", res.data.question)

            $scope.cardInEditMode = res.data;
      })
    }

    
  })