// const firstObj = {a:1, b:2};
// const secondObj = {c:1, b:2};

// const firstObj = {a:1, c:5, b:3, n:5};
// const secondObj = {c:5, n:5, f:9, k:3};

function crossingObj(obj1, obj2) {
    if(typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null){
        return false;
    }
const obj1Keys = Object.keys(obj1);
const obj2Keys = Object.keys(obj2);
return obj1Keys.reduce((acc= {}, key) => {
    if (obj1[key] === obj2[key]) {
        acc = {
            ...acc,
            [key]: obj1[key],
        };
    }
    return acc;
}, {});
}
console.log(crossingObj({c:1, b:2}, 456789))
console.log(crossingObj({c:1, b:2, v:13, h:4}, {c:2, b:3, v:14, h:5}))
console.log(crossingObj(null, {c:2, b:3, v:14, h:5}))


module.exports = crossingObj;