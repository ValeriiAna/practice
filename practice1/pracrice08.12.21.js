// Task1
function isPalindrome(str) {
 for(let i = 0; i < str.length; i++) {
     if(str[i] != str[str.length - 1 - i])
         return false;
 }
 return true;
}
console.log(isPalindrome('kotok'))

// Task2
function isValid(str1) {
    for(let i = 0; i < str1.length; i++) {
        if(str1.length > 2 && str1.length < 20){
            return "VALID"
        } else if (str1[0] === str1[0].toUpperCase()){
            return "VALID"
        } else if (str1.includes('?' , '!' , ' ' , ':' , '.' , ',' , '-')){
            return "VALID"
        } else if(typeof str1 != typeof 'string'){
            return "Incorrect input data"
        } else {
            return "INVALID"
        }
    }

}
console.log(isValid('u'))

// Task3
function sumOfElems(arg1, arg2) {
    if(arg1 % 3 === 0 && arg1 % 5 === 0 && arg1 % 15 === 0){
        arg1 = arg1 * (-1)
    }
     else if(typeof arg2 === 'number'){
         Number('arg2')
    }
return (+arg1) + (+arg2)
    
}
console.log(sumOfElems(15, '6'))

// Task 4
function checkNumber(value) {
    let array = [false, false, false];
    if (value % 2 === 0) {
       array[0] = true
    }
    if (value % 10 === 0) {
       array[1] = true
    }
    if (value % value === 0) {
        array[2] = true
    } else {
      array[2] = false
    }
return array
}
console.log(checkNumber(177))
