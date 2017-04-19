'use strict';

require('./_login.scss');
module.exports = {
  template: require('./login.html'),
  controller: ['$log', '$location', 'authService', '$uibModal', '$window', LoginController],
  controllerAs: 'loginCtrl',
  bindings: {
    close: '&',
    modal:'&',
    dismiss: '&'
  }
};

function LoginController($log, $location, authService, $uibModal, $window){
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
    console.log('yooooooooo');
    setTimeout(function() {
      $window.location.reload();
    }, 500);
  };
}
