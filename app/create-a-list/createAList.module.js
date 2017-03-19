angular 
	.module('createAList', [
		'ui.router',
		'createAList.dashboard'
		])

	.config(createAListConfig); 

	function createAListConfig($urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
	}
