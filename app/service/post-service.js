'use strict';

module.exports = ['$log', '$q', '$http', 'authService', postService];

function postService($log, $q, $http, authService){
  $log.debug('postService');

  let service = {};
  let service.posts = [];
}
