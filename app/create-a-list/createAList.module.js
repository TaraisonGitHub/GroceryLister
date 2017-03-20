angular 
	.module('createAList', [
		'ui.router',
		'createAList.dashboard',
		'createAList.home'
		])

	.config(createAListConfig); 

	function createAListConfig($urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
	}
