angular
	.module('createAList.home')
	.controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope, $http) {
	var vm = this;

	console.log("hello from the home controller");

	vm.person1 = {
		name: 'broccoli',
		email: 'fresh',
		number: '$2.39'
	};

	vm.person2 = {
		name: 'milk',
		email: 'dairy',
		number: '$2.19'
	};

	vm.person3 = {
		name: 'cheese',
		email: 'dairy',
		number: '$3.00'
	};

	$http({
		method: 'GET',
		url: '/'
	}).then(function(response) {
		console.log("I got the data I requested");
		$scope.person1 = response;
		console.log(response);
	});

	console.log(vm.person1.name);
	vm.personlist = ["person1", "person2", "person3"];

	console.log(vm.personlist);
}