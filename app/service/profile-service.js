'use strict';

module.exports = ['$q', '$log', '$http', 'Upload', 'authService', profileService];

function profileService($q, $log, $http, Upload, authService) {
  $log.debug('profileService');

  let service = {};

  service.fetchProfile = function(profileId){
    $log.debug('service.fetchProfile');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/profile/${profileId}`;
      let config = {
        headers:{
          Authorization: `Bearer ${token}`,
          Accept: 'application/json'
        }
      };
      return $http.get(url, config);
    })
    .then(res => {
      $log.log('profile fetched');
      let profile = res.data;
      return profile;
    })
    .catch(err => {
      $log.error(err.messge);
      return $q.reject(err);
    });
  };


  service.uploadProfilePic = function(picData) {
    $log.debug('service.uploadProfilePic');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/profile`;
      let headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      };

      return Upload.upload({
        url,
        headers,
        method: 'POST',
        data: {
          name: picData.name,
          bio: picData.bio,
          file: picData.file
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
