angular
	.module('createAList.dashboard')
	.config(dashboardConfig);

function dashboardConfig($stateProvider) {
	$stateProvider.state({
		name: 'dashboard',
		url: '/',
		templateUrl: '/create-a-list/features/dashboard/dashboard.html',
		controller: 'DashboardCtrl',
		controllerAs: 'DashboardVM'
	});
}