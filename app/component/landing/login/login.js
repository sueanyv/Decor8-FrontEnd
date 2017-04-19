'use strict';

require('./_login.scss');
module.exports = {
  template: require('./login.html'),
  controller: ['$log', '$location', 'authService', '$uibModal', LoginController],
  controllerAs: 'loginCtrl',
  bindings: {
    close: '&',
    dismiss: '&'
  }
};

function LoginController($log, $location, authService, $uibModal){
  $log.debug('loginController');

  this.login = function(){
    $log.debug('loginCtrl.login');
    authService.login(this.user)
    .then(() => {
      $location.url('/home');
    });
  };

  this.closeModal = function() {
    $log.log('closeModal()');
    // close the modal here
  };
}
