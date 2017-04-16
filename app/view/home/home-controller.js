'use strict';

require('./_home.scss');

module.exports = ['$log', '$rootScope', 'categoryService', HomeController];

function HomeController($log, $rootScope, categoryService){
  $log.debug('Home Controller');

  this.categories = [];
  // this.posts =[];

  this.fetchCategories = function(){
    categoryService.fetchCategories()
    .then(categories => {
      this.categories = categories;
      this.currentCategory = categories[0];
    });
  };
  // this.fetchPosts = function(){
  //   postService.fetchPosts()
  //   .then(posts => {
  //     this.posts = posts;
  //     this.currentPost = posts[0];
  //   });
  // };
  //
  this.fetchCategories();
  // this.fetchPosts();
  $rootScope.$on('$locationChangeSuccess', () => {
    // this.fetchPosts();
    this.fetchCategories();
  });
}
