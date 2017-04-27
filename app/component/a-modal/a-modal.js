'use strict';

require('./_a-modal.scss');

module.exports =  {
  template: require('./a-modal.html'),
  controller: ['$log','$uibModal', aModalController],
  bindToController: true,
  controllerAs: 'aModalCtrl',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  }
};


function aModalController($log, $uibModal) {
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
  }
}
