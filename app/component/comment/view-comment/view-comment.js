'use strict';

require('./_view-comment.scss');

module.exports = {
  template: require('./view-comment.html'),
  controller: ['$log', 'commentService', ViewCommentController],
  controllerAs: 'viewCommentCtrl',
  bindings: {
    comment: '<'
  }
};

function ViewCommentController($log, commentService){
  $log.debug('ViewCommentController');

  this.showEditComment = false;

  this.deleteComment = function(){
    commentService.deleteComment(this.comment._id);
  };
}
