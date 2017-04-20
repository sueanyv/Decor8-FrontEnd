'use strict';

module.exports = function(){
  return function(posts, categoryArray){
    if(!categoryArray.length) return posts;
    return posts.filter(post => {
      return categoryArray.indexOf(post.categoryID.toString()) !== -1 ;
    });
  };
};
