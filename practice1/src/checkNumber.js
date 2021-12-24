function checkNumber(value) {
    let array = [true, true, true];
    if(typeof value === 'string'){
        return NaN;
    }
    if (value > 1) {
        for(let i = 2; i < value; i++){
            if(value % i === 0){
                array[0] = false;
            }
        }
    }
    else {
        array[0] = false;
    }
     if (value % 2 !== 0) {
        array[1] = false
    }
    if (value % 10 !== 0) {
        array[2] = false
    }
    return array
}
console.log(checkNumber(-7))


module.exports = checkNumber;