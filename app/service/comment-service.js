'use strict';

module.exports = ['$log', '$q', '$http', 'authService', commentService];

function commentService($log, $q, $http, authService){
  $log.debug('commentService');

  let service = {};
  service.comments = [];

  service.createComment = function(comment){
    $log.debug('commentService.createComment');

    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/post/:postId/comment`; //eslint-disable-line
      let config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      return $http.post(url, comment, config);
    })
    .then(res => {
      $log.log('comment created');
      let comment = res.data;
      service.comments.unshift(comment);
      return comment;
    })
    .catch(err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  service.fetchComments = function(){
    $log.debug('commentService.fetchComments');

    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/comment/:id`; //eslint-disable-line
      let config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      };
      return $http.get(url, config);
    })
    .then(res => {
      $log.log('comments acquired');
      service.comments = res.data;
      return service.comments;
    })
    .catch(err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  service.updateComment = function(commentId, commentData){
    $log.debug('commentService.updateComment');

    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/comment/:id`; //eslint-disable-line
      let config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };
      return $http.put(url, commentData, config);
    })
    .then(res => {
      for(let i = 0; i < service.comments.length; i++){
        let current = service.comments[i];
        if(current._id === commentId){
          service.comments[i] = res.data;
          break;
        }
      }
    });
  };

  service.deleteComment = function(commentId){
    $log.debug('commentService.deleteComment');

    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/post/:postId/comment/:id`; //eslint-disable-line
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      return $http.delete(url, config);
    })
    .then(() => {
      for(let i = 0; i < service.comments.length; i++){
        let current = service.comments[i];
        if(current._id === commentId){
          service.comments.splice(i, 1);
          break;
        }
      }
    });
  };

  return service;
}
