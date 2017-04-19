'use strict';

require('./_edit-profile.scss');

module.exports = {
  template: require('./edit-profile.html'),
  controller: ['$log', 'profileService', EditProfileController],
  controllerAs: 'editProfileCtrl',
  bindings: {
    profile: '<'
  }
};

function EditProfileController($log, profileService) {
  $log.debug('EditProfileController');

  this.updateProfile = function() {
    profileService.updateProfile(this.profile._id, this.profile);
  };
}
