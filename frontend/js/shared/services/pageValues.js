'use strict';

export default (angular) =>{
    angular
    .module('app.core')
    .value('PageValues', {
        'title': null,
        'description': null,
        'loading': false
    });
}

