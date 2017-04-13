'use strict';

require('./_create-profile.scss');

module.exports = {
  template: require('./create-profile.html'),
  controller: ['$log', 'picService', UploadProfileController],
  controllerAs: 'uploadProfileCtrl',
};

function UploadProfileController($log, picService){
  $log.debug('UploadProfileController');

  this.profile = {};
 ////////
  this.uploadPic = function() {
    picService.uploadGalleryPic(this.gallery, this.pic)
    .then( () => {
      this.pic.name = null;
      this.pic.desc = null;
      this.pic.file = null;
    });
  };
}
