angular
	.module('createAList.home')
	.config(homeConfig);

function homeConfig($stateProvider) {
	$stateProvider.state({
		name: 'home',
		url: '/home',
		templateUrl: '/create-a-list/features/home/home.html',
		controller: 'HomeCtrl',
		controllerAs: 'HomeVM'
	});
}