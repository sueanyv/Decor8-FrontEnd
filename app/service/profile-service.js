'use strict';

module.exports = ['$q', '$log', '$http', 'Upload', 'authService', profileService];

function profileService($q, $log, $http, Upload, authService) {
  $log.debug('profileService');

  let service = {};

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
