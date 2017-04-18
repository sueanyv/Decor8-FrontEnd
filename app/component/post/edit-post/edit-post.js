'use strict';

require('./_edit-post.scss');

module.exports = {
  template: require('./edit-post.html'),
  controller: ['$log', 'postService', EditPostController],
  controllerAs: 'editPostCtrl',
  bindings: {
    post: '<'
  }
};

function EditPostController($log, postService){
  $log.debug('EditPostController');

  this.updatePost = function(){
    postService.upatePost(this.post._id, this.post);
  };
}
