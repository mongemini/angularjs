'use strict'

import angular from 'angular'

import core from './app.core'
import routes from './app.routes'
import config from './app.config'
import services from './app.services'

import app from './app'

core(angular);
routes(angular);
config(angular);
services(angular);

app(angular);
