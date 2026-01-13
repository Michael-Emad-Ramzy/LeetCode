/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // My First answer
    //
    // for(let i=0;i<nums.length;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if(nums[i]+nums[j] === target){
    //             return [i, j];
    //         }
    //     }
    // }

    // the better answer 

    const map = {}
    for(let i=0 ; i<nums.length ;i++){
        if(target - nums[i] in map){
            return [map[target - nums[i]],i]
        }else{
        map[nums[i]] = i;
        }
    }
};
