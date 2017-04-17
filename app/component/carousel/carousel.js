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
      image: 'http://placehold.it/350x150',
      id: currentIndex++
    },
    {
      image: 'http://placehold.it/350x150',
      id: currentIndex++
    },
    {
      image: 'http://placehold.it/350x150',
      id: currentIndex++
    }
  ];
}
