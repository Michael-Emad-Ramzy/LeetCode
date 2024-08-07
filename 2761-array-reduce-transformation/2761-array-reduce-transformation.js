/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    //1st solution
    // return nums.reduce(fn, init)
    

    //2nd solution
    // var result = init ;
    // for (var i= 0; i < nums.length; i++){
    //     result = fn(result , nums[i])
    // }  
    // return result ;


    //3rd solution
    // var result = init ;
    // for (var i of nums){
    //     result = fn(result , i)
    // }
    // return result ;


    //4th solution
    var res = init ;
    nums.forEach((n)=>{
        res = fn(res , n)
    });
    return res;
};