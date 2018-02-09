/**
    Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function sortNumber(a,b){
    return a-b
}
var searchInsert = function(nums, target) {
    if(nums.length==0)return 0
    if(nums.indexOf(target)>-1){
        return nums.indexOf(target)
    }else {
        nums.push(target)
        nums.sort(sortNum)
        return nums.indexOf(target)
    }
};