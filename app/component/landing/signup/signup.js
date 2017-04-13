'use strict';

require('./_signup.scss');

module.exports = {
  template: require('./signup.html'),
  controller: ['$log', '$location', 'authService', SignUpController],
  controllerAs: 'signupCtrl'
};

function SignUpController($log, $location, authService){


  authService.getToken()
  .then( () => {
    $location.url('/home');
  });

  this.signup= function(user){
    $log.debug('SignUpController.signup');

    authService.signup(user)
    .then(() => {
      $location.url('/home');
    });
  };
}
