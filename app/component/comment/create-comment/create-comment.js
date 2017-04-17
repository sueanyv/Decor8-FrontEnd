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

  this.CreateCommentController = function(){
    console.log(this.comment, 'log comment');
    commentService.uploadCommentPic(this.comment)
    .then(() => {
      this.comment.message = null;
      this.comment.file = null;
    });
  };
}
