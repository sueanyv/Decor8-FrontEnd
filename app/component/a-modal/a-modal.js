'use strict';

require('./_a-modal.scss');

module.exports =  {
  template: require('./a-modal.html'),
  controller: ['$log','$uibModal', 'authService', aModalController],
  bindToController: true,
  controllerAs: 'aModalCtrl',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  }
};


function aModalController($log, $uibModal, authService) {
  $log.debug('aModalController');

  this.openModal = function() {
    $log.log('openModal()');
    this.dialog = $uibModal.open({
      backdrop  : 'static',
      templateUrl: 'aModalContent.html'
    });
  };

  this.closeModal = function() {
    $log.log('closeModal()');
    this.dialog.close();
  };

  if(!localStorage.token){ //eslint-disable-line
    this.openModal();
    authService.signup({baduser: 'wakeup'}); // calling this line to wake up heroku as soon as a random user starts the page if it is asleep. This line is not intended to actually work or do anything besides ping the backend with a request that will fail.
  }
}
