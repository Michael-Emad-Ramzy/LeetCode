/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    for(let i=0; i<nums.length; i++){
        let number = nums[i];
        let numberCount = 0;
        for(let j=0; j<nums.length; j++){
            if(number == nums[j]){
                numberCount++ ;
            }
        }
        if(numberCount > nums.length/2){
            return number;
        }

    }
};