/**
    TODO
    You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    let count=[],compare=[],countNum=0;
    for(let i=0;i<nums.length;i++){
        compare=nums.slice(i+1)
        for(let j=0;j<compare.length;j++){
            if(compare[j]<nums[i]){
                countNum++
            }
        }
        count.push(countNum)
        countNum=0
    }
    return count
};
