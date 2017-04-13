'use strict';

require('./_home.scss');

module.exports = ['$log', '$rootScope', 'postService', HomeController];

function HomeController($log, $rootScope, postService){
  $log.debug('HomeController');

  this.posts = [];

  this.fetchPosts = function() {
    postService.fetchPosts()
    .then( posts => {
      this.posts = posts;
    });
  };

  this.fetchPosts();

  $rootScope.$on('$locationChangeSuccess', () => {
    this.fetchPosts();
  });
}
