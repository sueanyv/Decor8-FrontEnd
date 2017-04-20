'use strict';

require('./_navbar.scss');

module.exports = {
  template: require('./navbar.html'),
  controller: ['$log', '$location', '$rootScope', 'authService', '$window', NavbarController],
  controllerAs: 'navbarCtrl'
};

function NavbarController($log, $location, $rootScope, authService, $window) {
  $log.debug('NavbarController');

  this.checkPath = function() {
    let path = $location.path();
    if (path === '/home' && !localStorage.token) { //eslint-disable-line
      this.hideButtons = true;
    }

    if (path === '/home' && localStorage.token) { //eslint-disable-line
      this.hideButtons = false;
    }
  };

  this.checkPath();

  $rootScope.$on('$locationChangeSuccess', () => {
    this.checkPath();
  });

  this.logout = function() {
    $log.log('navbarCtrl.logout');
    this.hideButtons = true;
    authService.logout()
    .then( () => {
      if($location.url() === '/home'){
        setTimeout(function() {
          $window.location.reload();
        }, 500);
      } else{
        $location.url('/');
      }
    });
  };

  this.changeLocation = function(path){
    $location.url(path);
  };
}
