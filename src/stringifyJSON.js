// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // string it will have double quotes
  // array each value will be stringified
  // object numbers dont have quotes but strings do
  // function output null
  // boolean output as boolean 
  var result = [];
  if (Array.isArray(obj)) {
    
    for (let i = 0; i < obj.length; i++) {

      if (typeof obj[i] !== 'function' && typeof obj[i] !== undefined) {
        if (Array.isArray(obj[i])) {
          stringifyJSON(obj[i]);
        }
        // we dont have to look if its a string on ln 16
        // return that value   
        // inside the [] are the obj[i], ',' 
        result.push(obj[i]);
        
      }
      
    }
    return result;

  }
  if (typeof obj === 'number') {
    return "'" + obj + "'";
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
};
