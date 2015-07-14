app.directive('editFlashCard', function () {
	return {
		restrict: 'E',
		scope: {
			theCard: '=card'
		},
		templateUrl: '/directives/edit/edit.html'
	};
});