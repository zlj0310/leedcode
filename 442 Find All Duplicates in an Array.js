/**
   Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let arrIndex=[],arr=[]
    for(let i=0;i<nums.length;i++){
        if(arr.indexOf(nums[i])==-1){
            arr.push(nums[i])
        }else {
            arrIndex.push(nums[i])
        }
    }
    return arrIndex
};