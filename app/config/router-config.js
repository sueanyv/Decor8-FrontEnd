'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('', '/home');
  $urlRouterProvider.when('/', '/home');
  $urlRouterProvider.when('/signup', '/home');
  $urlRouterProvider.when('/login', '/home');


  let states = [
    {
      name: 'home',
      url: '/home',
      template: require('../view/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    },
    {
      name: 'post',
      url: '/post/:postId',
      template: require('../view/post/post.html'),
      controller: 'PostController',
      controllerAs: 'postCtrl'
    },
    {
      name: 'profile',
      url: '/profile',
      template: require('../view/profile/profile.html'),
      controller: 'ProfileController',
      controllerAs: 'profileCtrl',
    }
  ];

  states.forEach(state => {
    $stateProvider.state(state);
  });
}
