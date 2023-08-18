/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // split the words 
    const reversed = s.split(" ").reverse();
    console.log("==", reversed);
    
    const removeSpace = []
  for (let i = 0; i < reversed.length; i++){
      if (reversed[i] !== ""){
          removeSpace.push(reversed[i])
      }
  }
    console.log("===",removeSpace)
    return removeSpace.join(" ").trim()

    
    
};