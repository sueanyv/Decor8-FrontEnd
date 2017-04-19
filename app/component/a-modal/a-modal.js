'use strict';

require('./_a-modal.scss');

module.exports =  {
  restrict: 'EAC',
  template: require('./a-modal.html'),
  controller: ['$log', '$uibModal', aModalController],
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
    $uibModal.open({
      templateUrl: 'aModalContent.html'
    });
  };

  this.closeModal = function() {
    $log.log('closeModal()') ;
    $uibModal.close();
  };
}
