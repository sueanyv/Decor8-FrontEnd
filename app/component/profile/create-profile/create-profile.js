'use strict';

require('./_create-profile.scss');

module.exports = {
  template: require('./create-profile.html'),
  controller: ['$log', 'profileService', CreateProfileController],
  controllerAs: 'createProfileCtrl',
};

function CreateProfileController($log, profileService){
  $log.debug('CreateProfileController');

  this.profile = {};

  this.uploadPic = function() {
    console.log(this.profile, 'logging profile');
    profileService.uploadProfilePic(this.profile)
    .then( () => {
      this.profile.name = null;
      this.profile.bio = null;
      this.profile.file = null;
    });
  };
}
