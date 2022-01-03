
// let obj = {
//     a:100,
//     b:400,
//     c:50,
//     d:10,
//     e:2
// };
let obj = {
    a:200,
    b:100,
    c:550,
    d:1670,
    e:12
};
// let obj = {};
 simpleFunc = function (n) {
     return (this.a + this.b - this.c + this.d - this.e) / n
 }
     newFunc = simpleFunc.bind(obj, 2);

 // console.log(newFunc({a:100,b:400,c:50,d:10,e:2}, 2));
console.log(newFunc({a:200,b:100,c:550,d:1670,e:12}, 2));


module.exports = simpleFunc;
// module.exports = newFunc;

