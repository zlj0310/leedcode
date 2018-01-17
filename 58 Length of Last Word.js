/**
    Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

    If the last word does not exist, return 0.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.trim().split(' ')
    if(arr[arr.length-1].length == 0 && arr.length>1){
        return arr[arr.length-2].length
    }else if(arr[arr.length-1].length != 0){
        return arr[arr.length-1].length
    }else {
        return 0
    }
};
