'use strict';

require('./scss/main.scss');

const angular = require('angular');
const pascalcase = require('pascalcase');
const camelcase = require('camelcase');
const uiRouter = require('angular-ui-router');
const ngTouch = require('angular-touch');
const ngAnimate = require('angular-animate');
const ngFileUpload = require('ng-file-upload');
const uiBootstrap = require('angular-ui-bootstrap');
const ngRoute = require('angular-route');
const path = require('path');

const decor8 = angular.module('decor8',[ngTouch, ngRoute, ngAnimate, uiRouter, uiBootstrap, ngFileUpload]);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach(key => {
  decor8.config(context(key));
});

context = require.context('./view/', true, /\.js$/);
context.keys().forEach(key => {
  let name = pascalcase(path.basename(key, '.js'));
  decor8.controller(name, context(key));
});

context = require.context('./service/', true, /\.js$/);
context.keys().forEach(key => {
  let name = camelcase(path.basename(key, '.js'));
  decor8.service(name, context(key));
});

context = require.context('./component/', true, /\.js$/);
context.keys().forEach(key => {
  let name = camelcase(path.basename(key, '.js'));
  decor8.component(name, context(key));
});

context = require.context('./filter/', true, /\.js$/);
context.keys().forEach(key => {
  let name = camelcase(path.basename(key, '.js'));
  decor8.filter(name, context(key));
});

context = require.context('./directive/', true, /\.js$/);
context.keys().forEach(key => {
  let name = camelcase(path.basename(key, '.js'));
  decor8.directive(name, context(key));
});
