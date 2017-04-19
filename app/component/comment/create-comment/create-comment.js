'use strict';

require('./_create-comment.scss');

module.exports = {
  template: require('./create-comment.html'),
  controller: ['$log', '$location', 'commentService', CreateCommentController],
  controllerAs: 'createCommentCtrl',
  bindings: {
    post: '<'
  }

};

function CreateCommentController($log, $location, commentService){
  $log.debug('CreateCommentController');

  this.post = [];
  this.comment = {};



  this.createComment = function(){
    console.log(this.comment, 'log comment');
    console.log(this.post, 'post data');
    commentService.createComment( this.post, this.comment)
    .then( res => {
      this.comment.message = null;
      this.comment.image = null;
      $location.url(`/comment/${res._id}`);
    });
  };
}
