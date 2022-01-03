function searchEmptiness(obj) {
    const objKeys = Object.keys(obj);
    if (objKeys.length === 0) {
        return true;
    }
    // if(Object.getPrototypeOf(obj) === undefined){
    //     return true;
    // }
    return !objKeys.filter((key) => obj[key] || obj[key] === 0 || obj[key] === false).length;
}

console.log(searchEmptiness({a:1}));


module.exports = searchEmptiness;