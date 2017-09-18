'use strict'
require('angular-route');
require('angular-animate');
require('angular-moment');

import 'reset-css'
import './core.css'

 import components from './components/index.js'
 import shared from './shared/index.js'

export default (angular) =>{
    const app = angular.module('app', ['ngRoute', 'ngAnimate', 'angularMoment', 'app.routes', 'app.core', 'app.services', 'app.config']);

    shared(angular);
    components(angular);
}


