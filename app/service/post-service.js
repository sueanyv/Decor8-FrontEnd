'use strict';

module.exports = ['$q', '$log', '$http', 'authService', postService];

function postService($q, $log, $http, authService) {
  $log.debug('postService');

  let service = {};
  service.posts = [];

  service.createPost = function(post) {
    $log.debug('postService.createPost');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/post`;
      let config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      return $http.post(url, post, config);
    })
    .then( res => {
      $log.log('post created');
      let post = res.data;
      service.posts.unshift(post);
      return post;
    })
    .catch( err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  service.deletePosts = function(postID) {
    $log.debug('postService.deletePosts');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/post/${postID}`;
      let config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      // TODO: create $http.delete request
    });
  };

  service.fetchPosts = function() {
    $log.debug('postService.fetchPosts');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/post`;
      let config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      return $http.get(url, config);
    })
    .then( res => {
      $log.log('posts retrieved');
      service.posts = res.data;
      return service.posts;
    })
    .catch( err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  service.updatePost = function(postID, postData) {
    $log.debug('postService.updatePost');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/post/${postID}`;
      let config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };

      return $http.put(url, postData, config);
    })
    .then( res => {
      for (let i=0; i < service.posts.length; i++) {
        let current = service.posts[i];
        if (current._id === postID) {
          service.posts[i] = res.data;
          break;
        }
      }

      return res.data;
    })
    .catch( err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  service.deletepost = function(postID) {
    $log.debug('postService.deletePost');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/post/${postID}`;
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      return $http.delete(url, config);
    })
    .then( res => {
      for (let i=0; i <service.posts.length; i++) {
        let current = service.posts[i];
        if (current._id === postID) {
          service.posts.splice(i, 1);
          break;
        }
      }
    })
    .catch( err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  return service;
}
