app.controller('NewCardController', function ($scope, NewCardFactory, FlashCardFactory) {
	$scope.newCard = {
	    question: null,
	    category: null,
	    answers: [
	        { text: null, correct: false },
	        { text: null, correct: false },
	        { text: null, correct: false }
	    ]
	}

	$scope.doPostRequest = function (card) {
		if (card.question === null){
			console.log("there was no question")
		}
		return NewCardFactory.request(card)
		.then(function(card) {
		      FlashCardFactory.flashCards.push(card);
		      // $scope.newCardForm.$setPristine()
		      // card.question = null
		      // card.answers.forEach(function(answer){
		      // 	answer.text = null
		      // 	answer.correct = false
		      // })
		})
	}
	$scope.showButton = function (card){
		var answerTooLong = false
		card.answers.forEach(function(answer){
			if (answer.text !== null && answer.text.length > 40) {
				answerTooLong = true
				console.log("answer is too long")
			}	
		})
		if (card.question !== null && card.question.length >= 15 && card.category !== null && !answerTooLong){
			return true
		}
		return false
	}
	$scope.reset = function(){
		$scope.newCard = {
		    question: null,
		    category: null,
		    answers: [
		        { text: null, correct: false },
		        { text: null, correct: false },
		        { text: null, correct: false }
		    ]
		}
	}
})











app.factory('NewCardFactory', function ($http) {
	return {
		request: function (card) {
			var config = card;
			return $http.post('/cards', config)
	        .then(function (res) {
	          return res.data;
			})
		}
	}
})