'use strict';

require('./_create-profile.scss');

module.exports = {
  template: require('./create-profile.html'),
  controller: ['$log', '$location', 'profileService', CreateProfileController],
  controllerAs: 'createProfileCtrl',
};

function CreateProfileController($log, $location, profileService){
  $log.debug('CreateProfileController');

  this.profile = {};


  this.uploadPic = function() {
    profileService.uploadProfilePic(this.profile)
    .then(res => {
      this.profile.name = null;
      this.profile.bio = null;
      this.profile.file = null;
      console.log('res data', res);
      $location.url(`/profile/${res._id}`);

  this.CreateProfileController = function() {
    profileService.uploadProfilePic(this.pic)
    .then( () => {
      this.comment.message = null;
      this.comment.file = null;

    });
  };
