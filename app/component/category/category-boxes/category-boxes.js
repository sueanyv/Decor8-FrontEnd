'use strict';

require('./_category-boxes.scss');

module.exports = {
  template: require('./category-boxes.html'),
  controller: ['$log', CategoryBoxesController],
  controllerAs: 'categoryBoxesCtrl',
  bindings: {
    category: '<'
  }
};

function CategoryBoxesController($log){
  $log.debug('CategoryBoxesController');
}
