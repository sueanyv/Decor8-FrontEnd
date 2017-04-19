'use strict';

require('./_login.scss');
module.exports = {
  template: require('./login.html'),
  controller: ['$log', '$location', 'authService', LoginController],
  controllerAs: 'loginCtrl'
};

function LoginController($log, $location, authService){
  $log.debug('loginController');

  this.login = function(){
    $log.debug('loginCtrl.login');
    authService.login(this.user)
    .then(() => {
      $location.url('/home');
    });
  };
}
