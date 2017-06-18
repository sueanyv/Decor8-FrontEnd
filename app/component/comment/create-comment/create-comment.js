'use strict';

require('./_create-comment.scss');

module.exports = {
  template: require('./create-comment.html'),
  controller: ['$log', '$location', '$window', 'commentService', CreateCommentController],
  controllerAs: 'createCommentCtrl',
  bindings: {
    post: '<',
    comment: '<'
  }

};

function CreateCommentController($log, $location, $window, commentService){
  $log.debug('CreateCommentController');

  this.post = [];
  this.comment = {};

  this.createComment = function(){
    commentService.createComment( this.post, this.comment)
    .then(() => {
      this.comment.message = null;
      this.comment.image = null;
      setTimeout(function() {
        $window.location.reload();
      }, 500);
    });
  };
}
