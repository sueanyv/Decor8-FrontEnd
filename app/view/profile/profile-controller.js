'use strict';

require('./_profile.scss');

module.exports = ['$log', '$rootScope', '$location', 'profileService', ProfileController];

function ProfileController($log, $rootScope, $location, profileService){
  $log.debug('Profile Controller');

  this.profile = {};

  this.showCreateProfile = true;
  let temp = $location.path().split('/');
  let profileId = temp[temp.length - 1];

  this.fetchProfile = function() {
    profileService.fetchProfile(profileId)
    .then(profile => {
      this.showCreateProfile = false;
      this.profile = profile;
    });
  };

  this.fetchProfile();

  $rootScope.$on('$locationChangeSuccess', () => {

    this.fetchProfile();
  });


}
