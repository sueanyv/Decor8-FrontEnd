'use strict';

require('./_create-category.scss');

module.exports = {
  template: require('./create-category.html'),
  controller: ['$log', 'categoryService', CreateCategoryController],
  controllerAs: 'createCategoryCtrl',
  
};

function CreateCategoryController($log, categoryService){
  $log.debug('CreateCategoryController');

  this.category = {};

  this.createCategory = function(){
    $log.debug('createCategoryCtrl.createCategory');
    categoryService.createCategory(this.category)
    .then(() => {
      this.category.categoryType = null;
      this.category.desc = null;
    });
  };
}
