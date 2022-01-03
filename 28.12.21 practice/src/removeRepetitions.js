const arr = [1,2,3,1,2]
function removeRepetitions(arr) {
    if(!Array.isArray(arr) || arr.length === 0)
        return false;
    let debug = [];
    const uniqArr = arr.filter((item, index) => {
        debug.push({item, index, indexOf: arr.indexOf(item)})
        return index === arr.indexOf(item);

    })
    return uniqArr;

}
console.log(removeRepetitions([1,2,3,1,2]))
console.log(removeRepetitions([]))
console.log(removeRepetitions(6567485))
console.log(removeRepetitions([1,2,3,1,2,5,6,7,7,8,6]))
console.log(removeRepetitions([1,2,3,4,5,6,7,8,9]))

module.exports = removeRepetitions;