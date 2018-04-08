/**
    TODO
    You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    if(nums.length == 0) return [];
    
    let count=[],compare=[],countNum=0;
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
             if(nums[j]<nums[i]){
                countNum++
            }
        }
        count.push(countNum)
        countNum=0
    }
    count.push(0)
    return count
};
