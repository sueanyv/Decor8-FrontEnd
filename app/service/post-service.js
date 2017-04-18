'use strict';

module.exports = ['$log', '$q', '$http', 'Upload','authService', postService];

function postService($log, $q, $http, Upload, authService){
  $log.debug('postService');

  let service = {};
  service.posts = [];

  service.createPost = function(postData){
    $log.debug('commentService.createPost');
    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/post`;
      let headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      };

      return Upload.upload({
        url,
        headers,
        method: 'POST',
        data: {
          name: postData.name,
          desc: postData.desc,
          file: postData.file,
          price: postData.price,
          comment: postData.comment
        }
      });
    })
    .catch( err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };
  return service;
}
