var app = angular.module('FlashCardApp', ['ui.router'])

.config(function($stateProvider){
		$stateProvider
			.state('flashCardsView', {
				url: "/",
				controller: 'FlashCardCtrl',
				templateUrl: 'templates/flashcardsview.html'
			})
			.state('flashCardsForm', {
				url: "/form",
				controller: 'NewCardController',
				templateUrl:'templates/flashcardsform.html'
			})
			.state('statistics', {
				url: "/stats",
				controller: 'StatsController', 
				templateUrl: 'templates/stats.html'
			});
	})