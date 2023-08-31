/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
   let start = 0;
    let move = start + 1;
    
    while(move <= nums.length - 1){
        if(nums[start] !== 0){
            start++;
            move++;
        }else{
            if(nums[move] !== 0){
                [nums[start],nums[move]] = [nums[move],nums[start]];
                start++;
            }
            move++;
        }
        
    }
};