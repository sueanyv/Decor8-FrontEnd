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
      console.log('post data', postData)
      let url = `${__API_URL__}/api/category/${postData.categoryID}/post`; //eslint-disable-line
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
          image: postData.image,
          price: postData.price,
          comment: postData.comment
        }
      });
    })
    .then(res => {
      return res.data;
    })
    .catch( err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  service.fetchPost = function(postId){
    $log.debug('postService.fetchPost');

    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/post/${postId}`; //eslint-disable-line
      let config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      };
      return $http.get(url, config);
    })
    .then(res => {
      $log.log('post created');
      return res.data;
    })
    .catch(err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };
  return service;
}
