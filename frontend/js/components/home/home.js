'use strict';

export default (angular) =>{
    require('./home.css');
angular
    .module('app.core')
    .controller('HomeController', function($scope, PageValues) {
        let name = 'new name';
        $scope.greeding = `Hello ${name}`;
        PageValues.title = "HOME";
        PageValues.description = "Learn AngularJS using best practice real world examples.";

    });
}