'use strict';

module.exports = ['$log', '$q', '$http', 'Upload','authService', postService];

function postService($log, $q, $http, Upload, authService){
  $log.debug('postService');

  let service = {};
  service.posts = [];

  service.createPost = function(postData){
    $log.debug('postService.createPost');
    return authService.getToken()
    .then( token => {
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

  service.deletePost = function(postId, categoryId){
    $log.debug('postService.deletePost');

    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/category/${categoryId}/post/${postId}`; //eslint-disable-line
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      return $http.delete(url, config)
      .then(() => {
        for(let i = 0; i < service.posts.length; i++){
          let current = service.posts[i];
          if(current._id === postId){
            service.posts.splice(i, 1);
            break;
          }
        }
      })
      .catch(err => {
        $log.error(err.message);
        return $q.reject(err);
      });
    });
  };

  service.getPosts = function(){
    authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/post`; //eslint-disable-line
      let config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      };
      return $http.get(url, config);
    })
    .then(res => {
      console.log('in fetchposts after the fetch', res)
      return res.data;
    })
    .catch(err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  return service;
}
