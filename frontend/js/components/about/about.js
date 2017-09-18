'use strict';

export default (angular) =>{
    require('./about.css');
angular
    .module('app.core')
    .controller('AboutController', function($scope, PageValues) {
        let name = 'About';
        $scope.greeding = `Hello ${name}`;
        PageValues.title = "About";
        PageValues.description = "Learn AngularJS using best practice real world examples.";

    });
}