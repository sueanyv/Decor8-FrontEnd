'use strict';

require('./_home.scss');

module.exports = ['$log', '$rootScope', '$http', '$q', 'categoryService', 'postService', 'authService', HomeController];

function HomeController($log, $rootScope, $http, $q, categoryService, postService, authService){
  $log.debug('Home Controller');

  this.categories = [];
  this.posts =[];
  this.categorySelect = [];
  this.searchWidth = '0%';

  this.toggleSelection = function(categoryId){
    $log.debug('toggleSelection');
    let index = this.categorySelect.indexOf(categoryId);
    if(index > -1) {
      this.categorySelect.splice(index, 1);
    } else {
      this.categorySelect.push(categoryId);
    }
    console.log('categorySelect', this.categorySelect);
  };

  this.fetchCategories = function(){
    categoryService.fetchCategories()
    .then(categories => {
      this.categories = categories;
      this.currentCategory = categories[0];
    });
  };

  this.fetchPosts = function(){
    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/post`; //eslint-disable-line
      let config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      };
      return $http.get(url, config);
    })
    .then(res => {
      $log.log('post created');
      this.posts = res.data;
    })
    .catch(err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };


  this.fetchCategories();
  this.fetchPosts();
  $rootScope.$on('$locationChangeSuccess', () => {
    this.fetchPosts();
    this.fetchCategories();
  });

  this.openSideSearch = function(){
    this.searchWidth = '30%';
  };

  this.closeSideSearch = function(){
    this.searchWidth = '0%';
  };
}
