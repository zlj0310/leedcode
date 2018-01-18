/**
    Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function sortNumber(a,b) {
    return a-b;
}

function remove(arr){
    let temp=[];
    for(let i=0;i<arr.length;i++){
        if(temp.indexOf(arr[i])==-1){
            temp.push(arr[i])
        }
    }
    return temp;
}

var longestConsecutive = function(nums) {
    if(nums.length==0){
        return 0
    }else if(nums.length==1){
        return 1
    }
    let arr = remove(nums.sort(sortNumber)),result=[],resultLen=[],len=[];
    for (let i=0;i<arr.length;i++){
        result.push(arr[i])
        if(arr[i+1] == arr[i]+1){
            result.push(arr[i+1])
        }else {
            if(result.length !=0){
                resultLen.push(result);
                result = [];
            }
        }
    }
    
    if(result.length !=0){
        resultLen.push(result)
    }
    for(let i=0;i<resultLen.length;i++){
        resultLen[i] = remove(resultLen[i]);
        len.push(resultLen[i].length)
    }
    len.sort(sortNumber)
    return len[len.length-1]
};

