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
      let url = `${__API_URL__}/api/post/${post._id}/comment`; //eslint-disable-line
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
  return service;
}
