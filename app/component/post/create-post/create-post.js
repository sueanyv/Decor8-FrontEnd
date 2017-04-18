'use strict';

require('./_create-post.scss');

module.exports = {
  template: require('./create-post.html'),
  controller: ['$log', '$location', 'postService', 'categoryService', CreatePostController],
  controllerAs: 'createPostCtrl',
};

function CreatePostController($log, $location, postService, categoryService){
  $log.debug('CreatePostController');

  this.categories =[];
  this.post = {};

  this.fetchCategories = function(){
    categoryService.fetchCategories()
    .then(categories => {
      this.categories = categories;
      this.currentCategory = categories[0];
      console.log('categories', this.categories);
    });
  };

  this.fetchCategories();

  this.createPost = function() {
    postService.createPost(this.post)
    .then(res => {
      this.post.name = null;
      this.post.desc = null;
      this.post.price = null;
      this.post.comment = null;
      this.post.image = null;
      $location.url(`/post/${res._id}`);
    });
  };
}
