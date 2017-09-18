'use strict';

export default (angular) => {
    angular
    .module('app.routes', ['ngRoute'])
    .config(config);

    function config ($routeProvider) {
        $routeProvider.
            when('/', {
                template: require('./components/home/home.html'),
                controller: 'HomeController as home'
            }).
            when('/about', {
                template: require('./components/about/about.html'),
                controller: 'AboutController as about'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

}
