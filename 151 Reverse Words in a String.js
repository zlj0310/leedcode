/**
Given an input string, reverse the string word by word.

For example,
Given s = "the sky is blue",
return "blue is sky the".

Update (2015-02-12):
For C programmers: Try to solve it in-place in O(1) space.
*/

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    let str1 = str.trim();
    let arr=str1.split(' ').reverse();
    let strResult=''
    arr.forEach((value,index)=>{
        let valueAfter = value.trim();
        if(index == arr.length-1 || value==""){
            strResult += valueAfter
        }else {
            strResult += valueAfter+' '
        }
    })
    return strResult
};