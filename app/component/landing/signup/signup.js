'use strict';

require('./_signup.scss');

module.exports = {
  template: require('./signup.html'),
  controller: ['$log', '$location', 'authService', '$window', SignUpController],
  controllerAs: 'signupCtrl'
};

function SignUpController($log, $location, authService, $window){

  this.signup= function(){
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
}
