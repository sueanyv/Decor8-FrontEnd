'use strict';

require('./_view-post.scss');

module.exports = {
  template: require('./view-post.html'),
  controller: ['$log', 'postService', ViewPostController],
  controllerAs: 'viewPostCtrl',
  bindings: {
    post: '<'
  }
};

function ViewPostController($log, postService){
  $log.debug('ViewPostController');

  this.showEditPost = false;

  this.deletePost = function(){
    postService.deletePost(this.post._id);
  };
}
