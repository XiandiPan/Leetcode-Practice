/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    if (candies.length <= 1){
        return [true];
    }
    //create a empty array for boolean result
    const result = [];
     // find the max number of candies in the array 
    const maxCandies = Math.max(...candies);
    
    console.log("==",maxCandies)
    //loop through the array 
    for (let i = 0; i < candies.length; i++){
        let addedCandies = candies[i] + extraCandies;
        if (addedCandies >= maxCandies){
            result.push(true);
        }else{
            result.push(false)
        }
    }
    //add each element with extraCandies and compare it with the max candies
    //if less than max push false 
    //if more than max push true
    
    return result;
};