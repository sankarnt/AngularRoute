
/*
    @desc : routing for the entire application
    @desc : it uses the state mechanism for the routing
*/


var userApp = angular.module('userApp', ['ui.router']);


userApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("userlist", {
        // views: {
        //     "demo1": {
        //         templateUrl: "templates/home.html"
        //     },
        //     "demo2": {
        //         template: "<p>heloo</p>"
        //     }
        // },
        templateUrl: "templates/home.html",
        url: "/dashboard",
        controller: "userListController"
    }).
    state("userlist.registration",{
        url: "/registration",
        templateUrl: "templates/registration.html",
        // views: {
        //     "demo2": {
        //         templateUrl: "templates/registration.html"
        //     }
        // }
    })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/dashboard');
});
