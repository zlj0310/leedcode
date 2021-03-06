/**
Follow up for "Remove Duplicates":
What if duplicates are allowed at most twice?

For example,
Given sorted array nums = [1,1,1,2,2,3],

Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let arrA=[];
    nums.forEach((value,index) => {
        if(arrA.indexOf(value) == '-1' || arrA.indexOf(value) == arrA.lastIndexOf(value)){
            arrA.push(value)
        }
    });
    return arrA
};
