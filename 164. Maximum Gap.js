/**
    Given an unsorted array, find the maximum difference between the successive elements in its sorted form.

    Try to solve it in linear time/space.

    Return 0 if the array contains less than 2 elements.
    
    You may assume all elements in the array are non-negative integers and fit in the 32-bit signed integer range.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

function sortNumber(a,b){
    return a-b
}
var maximumGap = function(nums) {
    if(nums.length<2){
        return 0
    }
    let sortedArr = nums.sort(sortNumber), max=0;
    for(let i=0;i<sortedArr.length-1;i++){
        var cur=sortedArr[i+1]-sortedArr[i];
        if(cur>max){
            max=cur
        }
    }
    return max
};