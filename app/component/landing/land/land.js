'use strict';

require('./_land.scss');

module.exports = {
  template: require('./land.html'),
  controller: ['$log', '$uibModal', landController],
  controllerAs: 'landCtrl',
  bindings: {
    close: '&',
    modal: '&',
    dismiss: '&'
  }
};

function landController($log, $uibModal){ //eslint-disable-line
  $log.debug('landController');
  this.showSignup = true;
}
