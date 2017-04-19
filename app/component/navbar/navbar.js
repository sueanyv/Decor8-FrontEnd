'use strict';

require('./_navbar.scss');

module.exports = {
  template: require('./navbar.html'),
  controller: ['$log', '$location', '$rootScope', 'authService', NavbarController],
  controllerAs: 'navbarCtrl'
};

function NavbarController($log, $location, $rootScope, authService) {
  $log.debug('NavbarController');

  this.checkPath = function() {
    let path = $location.path();
    console.log('path', path);
    console.log('url', $location.url());
    if (path === '/home' && !localStorage.token) {
      this.hideButtons = true;
    }

    if (path === '/home' && localStorage.token) {
      this.hideButtons = false;
    }
  };

  this.checkPath();

  $rootScope.$on('$locationChangeSuccess', () => {
    console.log('Changthing');
    this.checkPath();
  });

  this.logout = function() {
    $log.log('navbarCtrl.logout');
    this.hideButtons = true;
    authService.logout()
    .then( () => {
      $location.url('/');
    });
  };
}
