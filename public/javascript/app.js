(function() {
	'use strict';
	angular.module('app', ['ui.router'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'templates/home.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		}).state('Projects',{
			url: '/projects',
			templateUrl: 'templates/project.html',
		}).state('Resume',{
			url: '/resume',
			templateUrl: 'templates/resume.html',
		}).state('Resume2',{
			url: '/resume2',
			templateUrl: 'templates/resume2.html',
		}).state('Contact',{
			url: '/contact',
			templateUrl: 'templates/contact.html',
		})
		$urlRouterProvider.otherwise('/');
	}
})();