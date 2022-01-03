function sliceArr(arr) {
    if(! Array.isArray(arr))
        return false;
    if(arr.length === 0) {
        return false;
    }
    let arrSize = 2
    let newArr = [];
    for(let i = 0; i < arr.length; i += arrSize) {
        newArr.push(arr.slice(i, i+arrSize));
    }
    return newArr
}
console.log(sliceArr([1,2,3,4,5]));
console.log(sliceArr([]));
console.log(sliceArr(2345678));
console.log(sliceArr([5,15,6,16,7,17,8,18]));


module.exports = sliceArr;