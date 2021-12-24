// Task - 1
function findSum(arr, val) {
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
console.log(findSum([1,2,4,9]));
console.log(findSum([1,2,4,4]));

// Task - 2
function simpleArr(arr) {
    let result = [];
    for(let i =0; i<arr.length; i++) {
        if(Array.isArray(arr[i])) {
            result = result.concat(simpleArr(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(simpleArr([1,2 , [3,4 , [5]]]));







// Task - 3
arr = [1,2,3,4,5];
let arrSize = 2
let newArr = [];
for(let i = 0; i < arr.length; i += arrSize) {
    newArr.push(arr.slice(i, i+arrSize));
}
console.log(newArr);


// Task - 4
function compareObj(obj1, obj2) {
  obj1 = {a:1 , b:1};
  obj2 = {a:1 , b:1};
  if(obj1 === obj2) {
      return true;
  } else {
      if(Object.keys(obj1).length !== Object.keys(obj2).length) {
          return false;
      } for(let propName in obj1) {
          if(obj1[propName].valueOf() !== obj2[propName].valueOf()) {
              return false;
          }
      }
  }
    return true;
}
console.log(compareObj());
