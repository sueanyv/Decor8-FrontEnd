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


  service.uploadProfilePic = function(profileData) {
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
          name: profileData.name,
          bio: profileData.bio,
          image: profileData.image
        }
      });
    })
    .then(res => {
      service.pic = res.data;
      return res.data;
    })
    .catch( err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };


  service.updateProfile = function(profileId, profileData) {
    $log.debug('profileService.updateProfile()');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/profile/${profileId}`;
      let config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };

      return $http.put(`${url}`, profileData, config)
        .then ( res => {
          return res;
        })
        .catch( err => {
          $log.error(err.message);
          return $q.reject(err);
        });
    });
  };

  return service;
}
