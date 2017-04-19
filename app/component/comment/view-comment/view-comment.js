'use strict';

require('./_view-comment.scss');

module.exports = {
  template: require('./view-comment.html'),
  controller: ['$log', '$location', 'commentService', ViewCommentController],
  controllerAs: 'viewCommentCtrl',
  bindings: {
    comment: '<'
  }
};

function ViewCommentController($log, $location, commentService){
  $log.debug('ViewCommentController');

  this.showEditComment = false;

  this.deleteComment = function(){
    commentService.deleteComment(this.comment._id, this.comment.postId)
    .then(() => {

    });
  };
}
