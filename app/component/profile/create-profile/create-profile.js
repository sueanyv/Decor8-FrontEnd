'use strict';

require('./_create-profile.scss');

module.exports = {
  template: require('./create-profile.html'),
  controller: ['$log', 'picService', CreateProfileController],
  controllerAs: 'createProfileCtrl',
};

function CreateProfileController($log, profileService){
  $log.debug('CreateProfileController');

  this.profile = {};

  this.CreateProfileController = function() {
    profileService.uploadProfilePic(this.pic)
    .then( () => {
      this.comment.message = null;
      this.comment.file = null;
    });
  };
}
