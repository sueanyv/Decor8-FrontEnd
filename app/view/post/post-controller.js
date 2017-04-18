'use strict';

require('./_post.scss');

module.exports = ['$log', '$rootScope', '$location', 'categoryService', 'postService', PostController];

function PostController($log, $rootScope, $location, categoryService, postService){
  $log.debug('PostController');

  this.post = {};
  this.categories =[];
  this.showCreatePost = true;

  let temp = $location.path().split('/');
  let postId = temp[temp.length-1];

  this.fetchPost = function(){
    postService.fetchPost(postId)
    .then(post => {
      this.post = post;
      this.showCreatePost = false;
    });
  };

  this.fetchPost();



  this.fetchCategories = function(){
    categoryService.fetchCategories()
    .then(categories => {
      this.categories = categories;
      this.currentCategory = categories[0];
    });
  };

  this.fetchCategories();

  $rootScope.$on('$locationChangeSuccess', () => {
    this.fetchPost();
    this.fetchCategories();
  });
}
