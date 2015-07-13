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
		return NewCardFactory.request(card)
		.then(function(card) {
		      FlashCardFactory.flashCards.push(card);
		})
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