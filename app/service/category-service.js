'use strict';

module.exports = ['$log', '$q', '$http', 'authService', categoryService];

function categoryService($log, $q, $http, authService){
  $log.debug('categoryService');

  let service = {};
  service.categories = [];

  service.createCategory = function(category){
    $log.debug('categoryService.createCategory');

    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/category`; //eslint-disable-line
      let config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      return $http.post(url, category, config);
    })
    .then(res => {
      $log.log('category created');
      let category = res.data;
      service.categories.unshift(category);
      return category;
    })
    .catch(err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };
  return service;
}
