'use strict';

require('./_carousel.scss');

module.exports = {
  template: require ('./carousel.html'),
  controller: ['$log', CarouselController],
  controllerAs: 'carouselCtrl'
};

function CarouselController($log){
  $log.debug('CarouselController');

  var currentIndex = 0;
  this.myInterval = 2500;
  this.nowWrapSlides = false;
  this.active = 0;
  this.slides = [
    {
      image: require('../../assets/kitchenwooden.jpg'),
      id: currentIndex++
    },
    {
      image: require('../../assets/palmlivingroom.jpg'),
      id: currentIndex++
    },
    {
      image: require('../../assets/living-chan.jpg'),
      id: currentIndex++
    }
  ];
}
