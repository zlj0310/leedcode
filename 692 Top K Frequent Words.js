/**
    Given a non-empty list of words, return the k most frequent elements.

    Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.
*/

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let wordSort = words.sort(),arrA=[],arrB=[],result=[]
    wordSort.map((value,index)=>{
        if(arrA.indexOf(value) === -1){
            arrA.push(value)
            arrB.push(1)
        }else {
            arrB[arrA.indexOf(value)]++
        }
    })
    for(let i=0;i<k;i++){
        let max = Math.floor(Math.max.apply(this,arrB))
        result.push(arrA[arrB.indexOf(max)])
        arrA.splice(arrB.indexOf(max),1)
        arrB.splice(arrB.indexOf(max),1)
    }
    return result
};