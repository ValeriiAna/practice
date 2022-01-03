function simpleArr(arr) {
    let result = [];
    if(!Array.isArray(arr))
        return false;
    if(arr.length === 0) {
        return 'tris arr is empty'
    }

    for(let i =0; i<arr.length; i++) {
        if(Array.isArray(arr[i])) {
            result = result.concat(simpleArr(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(simpleArr([1,2 , [3,4 , [5]]]));
console.log(simpleArr(5467890));
console.log(simpleArr([]));
console.log(simpleArr([70, 2 , [3,4 ,[15,2,11, [3,4 , [6,7,2, [5]]]]]]));


module.exports = simpleArr;