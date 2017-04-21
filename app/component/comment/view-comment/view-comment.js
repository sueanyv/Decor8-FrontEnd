'use strict';

require('./_view-comment.scss');

module.exports = {
  template: require('./view-comment.html'),
  controller: ['$log', '$location', '$window', 'commentService', ViewCommentController],
  controllerAs: 'viewCommentCtrl',
  bindings: {
    comment: '<'
  }
};

function ViewCommentController($log, $location, $window, commentService){
  $log.debug('ViewCommentController');

  this.showEditComment = false;

  this.deleteComment = function(){
    commentService.deleteComment(this.comment._id, this.comment.postId)
    .then(() => {
      setTimeout(function() {
        $window.location.reload();
      }, 500);
    });
  };
}
