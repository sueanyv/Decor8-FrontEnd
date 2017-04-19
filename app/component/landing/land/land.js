'use strict';

require('./_land.scss');

module.exports = {
  template: require('./land.html'),
  controller: ['$log', landController],
  controllerAs: 'landCtrl'
};

function landController($log, $location, authService){ //eslint-disable-line
  $log.debug('landController');
  this.showSignup = true;
}
