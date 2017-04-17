'use strict';

require('./_profile.scss');

module.exports = ['$log', '$rootScope', ProfileController];

function ProfileController($log, $rootScope){
  $log.debug('Profile Controller');

}
