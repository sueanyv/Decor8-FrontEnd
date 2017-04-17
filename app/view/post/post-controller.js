'use strict';

require('./_post.scss');

module.exports = ['$log', '$rootScope', '$location', 'postService', PostController];

function PostController($log, $rootScope, $location, postService){
  $log.debug('PostController');

  this.post = {};

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

  $rootScope.$on('locationChangeSuccess', () => {
    this.fetchPost();
  });
}
