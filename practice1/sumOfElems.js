function sumOfElems(arg1, arg2) {
    if (typeof arg1 === 'string' || arg1 === null ) {
        return false;
    }
    if(arg1 % 3 === 0 || arg1 % 5 === 0 || arg1 % 15 === 0){
        arg1 = arg1 * (-1)
    }
    if(Number.isNaN(Number(arg2))){
        return false;
    }
    return (+arg1) + (+arg2)

}
console.log(sumOfElems(3, '8'))

module.exports = sumOfElems;