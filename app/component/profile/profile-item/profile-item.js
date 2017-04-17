'use strict';

require('./_profile-item.scss');

module.exports = {
  template: require('./profile-item.html'),
  controller: ['$log', 'profileService', ProfileItemController],
  controllerAs: 'profileItemCtrl',
  bindings: {
    profile: '<'
  }
};

function ProfileItemController($log, profileService) {
  $log.debug('ProfileItemController');

  this.showEditProfile = false;

  this.deleteProfile = function() {
    profileService.deleteProfile(this.profile.profileId);
  };
}
