'use strict';

require('./_signup.scss');
const lorem = require('lorem-ipsum');

module.exports = {
  template: require('./signup.html'),
  controller: ['$log', '$location', 'authService', '$window', SignUpController],
  controllerAs: 'signupCtrl'
};

function SignUpController($log, $location, authService, $window){

  this.signup = function(){
    $log.debug('SignUpController.signup');

    authService.signup(this.user)
    .then(() => {
      $location.url('/');
    });
  };

  this.closeModal = function() {
    $log.log('closeModal()');
    setTimeout(function() {
      $window.location.reload();
    }, 500);
  };

  this.signInGuest = function(){
    var username = lorem({count: 2, units: 'word'}).split(' ').join('-');
    var password = lorem({count: 2, units: 'word'}).split(' ').join('-');
    var email= lorem({count: 2, units: 'word'}).split(' ').join('-');
    var randomUser = {
      username,
      password,
      email: `${email}@decor8`
    };
    authService.signup(randomUser)
    .then(() => {
      $location.url('/');
      this.closeModal();
    });
  };
}
