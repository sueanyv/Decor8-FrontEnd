'use strict';

require('./_create-post.scss');

module.exports = {
  template: require('./create-post.html'),
  controller: ['$log', 'postService', CreatePostController],
  controllerAs: 'createPostCtrl',
  bindings: {
    category: '<'
  }
};

function CreatePostController($log, postService){
  $log.debug('CreatePostController');

  this.post = {};
  this.categories = [];

  this.CreatePostController = function() {
    postService.uploadPost(this.post)
    .then( () => {
      this.post.name = null;
      this.post.desc = null;
      this.post.price = null;
      this.post.comment = null;
      this.post.file = null;
    });
  };
}
