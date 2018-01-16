// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // 
  
  var result = [];
  var node = node || document.body; // the || is because of recursion its either the document or node child
  
  var classList = node.className.split(' '); // taking the className from node and making it into an array
  
  if (classList.indexOf(className) !== -1) { // this is checking if the className is in the classList(array)
    result.push(node); // node is the html collection with the class name and is being pushed to the result array
  }
  

  // node.children returns all the child elements of the html collection
  Array.from(node.children).forEach(function(child) { //Array.from converts node.children into an array so we can iterate
    result = result.concat(getElementsByClassName(className, child)); 
  }); // does recursion by calling getElementsByClassName and putting the child as the node argument (line 7)
  // makes a new array of the node child with the className and then it will check the children for the className
  // concatenates the previous results with the new ones 
  
  return result;
       
};
