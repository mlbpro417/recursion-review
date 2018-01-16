// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // your code here
  var result = [];
  var node = node || document.body;
  
  var clist = node.className.split(' ');
  // for ( var i = 0; i < clist.length; i++) {
  //   if (clist[i] === className) {
  //     result.push(clist[i]);  
  //   }
  // } 
  
  // we need to know if indexOf(className) returns true or false
  // if true then we push to results
  // if false we do recursion
  if (clist.indexOf(className) !== -1) {
    result.push(className);
  }
  
  Array.from(node.children).forEach(function(child) {
    result = result.concat(getElementsByClassName(className, child));
  });
  
  
  return result;
       
};
