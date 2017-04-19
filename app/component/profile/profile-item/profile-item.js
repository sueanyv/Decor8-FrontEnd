'use strict';

require('./_profile-item.scss');

module.exports = {
  template: require('./profile-item.html'),
  controller: ['$log', '$location', 'profileService', ProfileItemController],
  controllerAs: 'profileItemCtrl',
  bindings: {
    profile: '<'
  }
};

function ProfileItemController($log, $location, profileService) {
  $log.debug('ProfileItemController');

  this.showEditProfile = false;

  this.deleteProfilePic = function() {
    profileService.deleteProfilePic(this.profile.image);
  };
}
