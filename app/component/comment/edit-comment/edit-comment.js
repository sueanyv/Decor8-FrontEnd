'use strict';

require('./_edit-comment.scss');

module.exports = {
  template: require('./edit-comment.html'),
  controller: ['$log', 'commentService', EditCommentController],
  controllerAs: 'editCommentCtrl',
  bindings: {
    comment: '<',
    post:'<'
  }
};

function EditCommentController($log, commentService) {
  $log.debug('EditCommentController');

  this.updateComment = function() {
    commentService.updateComment(this.comment._id, this.comment);
  };
}
