'use strict';

require('_view-category.scss');

module.exports = {
  template: require('./view-category.html'),
  controller: ['$log', 'categoryService', ViewCategoryController],
  controllerAs: 'viewCategoryCtrl',
  bindings: {
    category: '<'
  }
};

function ViewCategoryController($log, categoryService){
  $log.debug('ViewCategoryController');

  this.showEditCategory = false;

  this.deleteCategory = function(){
    categoryService.deleteCategory(this.category._id);
  };
}
