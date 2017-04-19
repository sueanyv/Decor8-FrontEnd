'use strict';

module.exports = function(){
  console.log('in category search');
  return function(posts, categoryArray){
    return posts.filter(post => {
      return categoryArray.indexOf(post._id) === -1 ;
    });
  };
};
