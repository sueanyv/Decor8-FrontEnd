'use strict';

require('./_create-comment.scss');

module.exports = {
  template: require('./create-comment.html'),
  controller: ['$log', '$location', 'commentService', CreateCommentController],
  controllerAs: 'createCommentCtrl',
};

function CreateCommentController($log, $location, commentService){
  $log.debug('CreateCommentController');

  this.comment = {};

  this.CreateCommentController = function(){
    console.log(this.comment, 'log comment');
    commentService.uploadCommentPic(this.comment)
    .then( res => {
      this.comment.message = null;
      this.comment.file = null;
      $location.url(`/comment/${res._id}`);
    });
  };
}
