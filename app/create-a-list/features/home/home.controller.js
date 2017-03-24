angular
	.module('createAList.home')
	.controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope, $http) {
	var vm = this;

	console.log("hello from the home controller");

	vm.person1 = {
		name: 'Cassandra',
		email: 'CNO@example.com',
		number: '(111)111-1111'
	};

	vm.person2 = {
		name: 'Erika',
		email: 'Erika@otaku.com',
		number: '(090)444-2222'
	};

	vm.person3 = {
		name: 'Tom',
		email: 'Tanaka@dek.com',
		number: '(090)333-3333'
	};

	console.log(vm.person1.name);
	vm.personlist = ["person1", "person2", "person3"];

	console.log(vm.personlist);
}