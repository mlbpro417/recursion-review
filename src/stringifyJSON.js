// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // string it will have double quotes
  // array each value will be stringified
  // object numbers dont have quotes but strings do
  // function output null
  // boolean output as boolean 
  
  if (typeof obj === 'strings') {
    return '"' + obj + '"';
  }
};
