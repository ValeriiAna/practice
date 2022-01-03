function f1(x) {
    if(typeof x !== 'number') {
        return false;
    }
    let result = '';

    for (let i = 1; i <= x; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result = result.concat('threeFive ');
        } else if (i % 3 === 0) {
            result = result.concat('three ');
        } else if (i % 5 === 0) {
            result = result.concat('five ')
        } else {
            result = result.concat( `${i} ` );
        }
    }
    return result;
}
const res = f1(20);

console.log(res);


module.exports = f1;