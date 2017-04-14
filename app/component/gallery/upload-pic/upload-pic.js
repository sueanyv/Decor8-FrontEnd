'use strict';

require('./_upload-pic.scss');

module.exports = {
  template: require('./upload-pic.html'),
  controller: ['$log', 'picService', UploadPicController],
  controllerAs: 'uploadPicCtrl',
  bindings: {
    post: '<'
  }
};

function UploadPicController($log, picService) {
  $log.debug('UploadPicController');

  this.pic = {};

  this.uploadPic = function() {
    picService.uploadPostPic(this.post, this.pic)
    .then( () => {
      this.pic.name = null;
      this.pic.desc = null;
      this.pic.file = null;
    });
  };
}
