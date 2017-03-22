
// Directives can be used anywhere within an Angular application
angular
	
	// This is a directive and therefore it has the "component" as part of its name.
	// This is done so there is no conflict in case a state named "list" is also created
	// (I.e., this way there is no naming conflict between directives and states)
	.module('createAList.component.list', []);