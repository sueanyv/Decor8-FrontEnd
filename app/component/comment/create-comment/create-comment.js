'use strict';

require('./_create-comment.scss');

module.exports = {
  template: require('./create-comment.html'),
  controller: ['$log', 'commentService', CreateCommentController],
  controllerAs: 'createCommentCtrl',
};

function CreateCommentController($log, commentService){
  $log.debug('CreateCommentController');

  this.comment = {};

  this.createComment = function(){
    $log.debug('createCommentCtrl.createComment');
    commentService.createComment(this.comment)
    .then(() => {
      this.comment.commentType = null;
      this.comment.desc = null;
    });
  };
}
