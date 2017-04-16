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

  service.fetchCategories = function(){
    $log.debug('categoryService.fetchCategories');

    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/category`; //eslint-disable-line
      let config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      };
      return $http.get(url, config);
    })
    .then(res => {
      $log.log('categories acquired');
      service.categories = res.data;
      return service.categories;
    })
    .catch(err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  service.updateCategory = function(categoryId, categoryData){
    $log.debug('categoryService.updateCategory');

    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/category/${categoryId}`; //eslint-disable-line
      let config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };
      return $http.put(url, categoryData, config);
    })
    .then(res => {
      for(let i = 0; i < service.categories.length; i++){
        let current = service.categories[i];
        if(current._id === categoryId){
          service.categories[i] = res.data;
          break;
        }
      }
    });
  };

  service.deleteCategory = function(categoryId){
    $log.debug('categoryService.deleteCategory');

    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/category/${categoryId}`; //eslint-disable-line
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      return $http.delete(url, config);
    })
    .then(() => {
      for(let i = 0; i < service.categories.length; i++){
        let current = service.categories[i];
        if(current._id === categoryId){
          service.categories.splice(i, 1);
          break;
        }
      }
    });
  };

  return service;
}
