function isDeepCompare(firstObj, secondObj) {
    const firstObjKeys = Object.keys(firstObj);
    const secondObjKeys = Object.keys(secondObj);
    if(firstObjKeys.length !== secondObjKeys.length){
        return false;
    }
    const compareList = firstObjKeys.map((key) => {
        const valueOfFirstObj = firstObj[key];
        const valueOfSecondObj = secondObj[key];
        if((Number.isNaN(valueOfFirstObj) && Number.isNaN(valueOfSecondObj)) || (valueOfFirstObj === null && valueOfSecondObj === null)) {
            return true;
        }
        if(valueOfFirstObj === valueOfSecondObj){
            return true;
        }
        // if(Array.isArray(valueOfFirstObj) && Array.isArray(valueOfSecondObj)) {
        //     return isArrayDeepCompare(valueOfFirstObj, valueOfSecondObj);
        // }
        if(typeof valueOfFirstObj === 'object' && typeof  valueOfSecondObj === 'object'){
            return isDeepCompare(valueOfFirstObj, valueOfSecondObj);
        }

        return false;
    });
     return !compareList.includes(false) && !compareList.includes(undefined);
    // return compareList;
}
console.log(isDeepCompare({ a: 1, b: { c: 1 }} , { a: 1, b: { c: 1 }}));

module.exports = isDeepCompare;
