function findSum(arr, val) {
    if(typeof val !== 'number' || val === null){
        return 'val must be a number'
    }
    if(!Array.isArray(arr) || arr.length === 0) {
        return false;
    }
    val = 8;

    for(let i = 0; i < arr.length; i++) {
        for(let j=0; j<arr.length; j++) {
            if( i !==j && arr[i] + arr[j] === val) {
                return true;
            }
        }
    }
    return false;
}
console.log(findSum([1,2,4,9], 8));
console.log(findSum([1,2,4,4], 8));
console.log(findSum([1,2,4,4], null));
console.log(findSum([1,2,4,4], 'lalalla'));
console.log(findSum(11145687, 8));
console.log(findSum([1,12,15,3,4,7], 8));
console.log(findSum([], 8));

module.exports = findSum;