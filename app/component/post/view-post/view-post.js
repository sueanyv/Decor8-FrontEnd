'use strict';

require('./_view-post.scss');

module.exports = {
  template: require('./view-post.html'),
  controller: ['$log', '$location', 'postService', ViewPostController],
  controllerAs: 'viewPostCtrl',
  bindings: {
    post: '<'
  }
};

function ViewPostController($log, $location, postService){
  $log.debug('ViewPostController');

  this.showEditPost = false;
  this.log = function(){
    console.log(this.post);
  };
  this.deletePost = function(){
    postService.deletePost(this.post._id, this.post.categoryID)
    .then(() => {
      $location.url('/post/add');
    });
  };
}
