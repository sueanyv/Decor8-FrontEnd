'use strict';

require('./_edit-category.scss');

module.exports = {
  template: require('./edit-category.html'),
  controller: ['$log', 'categoryService', EditCategoryController],
  controllerAs: 'editCategoryCtrl',
  bindings: {
    category: '<'
  }
};

function EditCategoryController($log, categoryService){
  $log.debug('EditCategoryController');

  this.updateCategory = function(){
    categoryService.updateCategory(this.category._id, this.category);
  };
}
