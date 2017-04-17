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

  this.CreateProfileController = function() {
    profileService.uploadProfilePic(this.pic)
    .then( () => {
      this.pic.name = null;
      this.pic.bio = null;
      this.pic.file = null;
    });
  };
}
