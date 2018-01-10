/**
    Given a string, sort it in decreasing order based on the frequency of characters.
*/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let arr=s.split(''),arrA=[],arrB=[],resultArr=[],tempA,tempB;
    for(let i=0;i<arr.length;i++){
        if(arrA.indexOf(arr[i]) == -1){
            arrA.push(arr[i]);
            arrB.push(1)
        }else {
            arrB[arrA.indexOf(arr[i])]++;
        }
    }
 
    //冒泡排序
    for(let i=0;i<arrB.length-1;i++){
        for(let j=0;j<arrB.length-i-1;j++){
            if(arrB[j]<arrB[j+1]){
                tempB=arrB[j];
                arrB[j]=arrB[j+1];
                arrB[j+1]=tempB;
                tempA=arrA[j];
                arrA[j]=arrA[j+1];
                arrA[j+1]=tempA;
            }
        }
    }
    
    for(let i=0;i<arrB.length;i++){
        for(let j=0;j<arrB[i];j++){
            resultArr.push(arrA[i])
        }
    }
    return resultArr.join('')
};
