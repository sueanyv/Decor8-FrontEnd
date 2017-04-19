'use strict';

module.exports = ['$log', '$location', '$rootScope', 'authService', LandingController];

function LandingController($log, $location, authService){ //eslint-disable-line
  $log.debug('LandingController');
  let url = $location.url();
  this.showSignup = url === '/home' || url === '/home';
}
