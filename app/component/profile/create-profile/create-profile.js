'use strict';

require('./_create-profile.scss');

module.exports = {
  template: require('./create-profile.html'),
  controller: ['$log', 'picService', UploadProfileController],
  controllerAs: 'uploadProfileCtrl',
};

function UploadProfileController($log, profileService){
  $log.debug('UploadProfileController');

  this.profile = {};

  this.UploadProfileController = function() {
    profileService.uploadProfilePic(this.pic)
    .then( () => {
      this.pic.name = null;
      this.pic.bio = null;
      this.pic.file = null;
    });
  };
}
