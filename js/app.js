
/*
    @desc : routing for the entire application
    @desc : it uses the state mechanism for the routing
*/


var userApp = angular.module('userApp', ['ui.router']);


userApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("userList", {
        views: {
            "demo1": {
                templateUrl: "templates/home.html"
            },
            "demo2": {
                template: "helooo"
            }
        },
        url: "/dashboard",
        controller: "userListController"
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/dashboard');
});
