angular
	.module('createAList.component.list')
	.directive('list', List); //'name of mongo db????' //this is where camelCase is converted to dash-case in the directive

function List() {
	return {
        restrict: 'E', // Directives can be an element(E) type and/or an attribute(A) type and/or a class(C) type
        scope: { // The properties that can be passed into the VM from the callie of the directive
            // properites are defined with a value defining there prefix
            listData: '=' // @ - reads the value (one-way binding), = - binds the model (two-way binding), & for function binding
        },
        templateUrl: '/createAHero/features/components/list/list.html', // The url to the view template
        controller: ListCtrl, // The function to use as the controller for this directive
        controllerAs: 'ListVM', // The namespace for the view to access the view model
        bindToController: true // The scope is isolated because we are using controllerAs
    };
}

function ListCtrl($scope) {
    var vm = this; // vm stands for View Model - anything on "the vm" is exposed to the view

    $scope.vm.userName = 'Jenny';
}
