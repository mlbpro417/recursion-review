// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // string it will have double quotes
  // array each value will be stringified
  // object numbers dont have quotes but strings do
  // function output null
  // boolean output as boolean 
  
  if (Array.isArray(obj)) {
    var result = [];
    for (let i = 0; i < obj.length; i++) {
      if (typeof obj[i] !== 'function' && typeof obj[i] !== undefined) {
        
        // we dont have to look if its a string on ln 16
        // return that value   
        // inside the [] are the obj[i], ',' 
        result.push(stringifyJSON(obj[i]));
        
      }
      
    } 
    return '[' + result + ']';

  }
  if (typeof obj === 'object' && obj) {
    // do a for in loop
    // the objects key should be "" and the property ""
    // key = "" and obj[key] = ""
    // if (obj === null) {
    //   return 'null';    
    // }
    var result = [];
    for (let key in obj) {
      
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        // use recursion for the key and property since we dont know its data type
        result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    
    return '{' + result + '}';
  }
  
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  return '' + obj;
};
