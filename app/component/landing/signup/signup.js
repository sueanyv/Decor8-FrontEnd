'use strict';

require('./_signup.scss');

module.exports = {
  template: require('./signup.html'),
  controller: ['$log', '$location', 'authService', SignUpController],
  controllerAs: 'signupCtrl'
};

function SignUpController($log, $location, authService){

  this.signup= function(){
    $log.debug('SignUpController.signup');

    authService.signup(this.user)
    .then(() => {
      $location.url('/home');
    });
  };
}
