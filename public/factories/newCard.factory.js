app.factory('NewCardFactory', function ($http) {
	return {

		// editIt: function (card) {
		// 	var config = card;
		// 	return $http.put('/cards/:flashCardId', config)
		// 	.then(function (res) {
		// 		return res.data
		// 	})
		// },
		cardId: {id: null},

		request: function (card) {
			var config = card;
			return $http.post('/cards', config)
	        .then(function (res) {
	          return res.data;
			})
		}

		// update: function(card, id) {
		// 	return $http.put('/edit/' + id, card, id)
		// 	.then(function(res){
		// 		return res.data;
		// 	})
		// }
	}
});