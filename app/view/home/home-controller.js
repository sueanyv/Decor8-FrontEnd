'use strict';

require('./_home.scss');

module.exports = ['$log', '$location', '$rootScope', 'postService', HomeController];

function HomeController($log, $rootScope, postService){
  $log.debug('Home Controller');
  this.posts =[];

  this.fetchPosts = function(){
    postService.fetchPosts()
    .then(posts => {
      this.posts = posts;
      this.currentPost = posts[0];
    });
  };

  this.fetchPosts();
  $rootScope.$on('$locationChangeSuccess', () => {
    this.fetchPosts();
  });
}
