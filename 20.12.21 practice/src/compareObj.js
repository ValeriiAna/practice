function compareObj(obj1, obj2) {
    // obj1 = {a:1 , b:1};
    // obj2 = {a:1 , b:1};
    if(typeof obj1 !== 'object' || typeof obj2 !== 'object'){
        return false;
    }
    if(obj1 === null || obj2 === null) {
        return 'cannot compare obj';
    }
    if(obj1 === obj2) {
        return true;
    } else {
        if(Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        } for(let propName in obj1) {
            if(obj1[propName].valueOf() !== obj2[propName].valueOf()) {
                return false;//не сравнивает разные названия ключей?
            }
        }
    }
    return true;
}
console.log(compareObj({a:1, b:1}, {a:1, b:1}));
console.log(compareObj({a:4, b:12, c:3}, {a:4, b:12, c:3}));
console.log(compareObj({a:4, c:3}, {a:8, b:12, c:90}));
console.log(compareObj([12,4,8,90], {a:8, b:12, c:90}));
console.log(compareObj({ }, {a:8, b:12, c:90}));
console.log(compareObj({a:4, c:3}, {a:4, b:12, c:3}));
console.log(compareObj(null, {a:4, b:12, c:3}));
console.log(compareObj(null, null));
console.log(compareObj({b:9, n:1, m:30}, {b:9, n:1, m:30}));
console.log(compareObj({b:9, n:1, m:30}, {m:9, n:1, b:30}));
console.log(compareObj('this is not object', {m:9, n:1, b:30}));



module.exports = compareObj;
