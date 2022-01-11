// function ucWords(str) {
//     if(typeof str !== 'string' || str === null) {
//         return false;
//     }
//     else if(str.length === 0){
//         return 'your string is empty'
//     }
//     let a = str.trim();
//     let b = a.replace(/ {1,} /g, '' );
//     let c = b.toLowerCase();
//     let d = c.split(' ');
//     let e = d.map(str => str[0].toUpperCase() + str.slice(1));
//     let f = e.join(' ');
//     return f;
// }
// console.log(ucWords('my name is lera'));

// function ucFirst(str){
//     if(typeof str !== 'string' || str === null) {
//         return false;
//     }
//     else if(str.length === 0){
//         return 'your string is empty'
//     }
//     return str[0].toUpperCase() + str.slice(1);
// }
// console.log(ucFirst('mama'))

// function reverse(str) {
//     if(typeof str !== 'string' || str === null) {
//         return false;
//     }
//        else if(str.length === 0){
//             return 'your string is empty'
//         }
//
//     let result = '';
//     result = str.split('').reverse().join('');
//     return result;
// }
// console.log(reverse(''))

// 1)Реализуйте класс MyString, который будет иметь следующие методы:
// метод reverse(), который параметром принимает строку,
// а возвращает ее в перевернутом виде, метод ucFirst(),
// который параметром принимает строку, а возвращает эту же строку,
// сделав ее первую букву заглавной и метод ucWords,
// который принимает строку и делает заглавной первую букву каждого слова этой строки.
class MyString {
    constructor() {
    }

    reverse(str) {
        if (typeof str !== 'string' || str === null) {
            return false;
        } else if (str.length === 0) {
            return 'your string is empty'
        }

        let result = '';
        result = str.split('').reverse().join('');
        return result;
    }

    ucFirst(str) {
        if (typeof str !== 'string' || str === null) {
            return false;
        } else if (str.length === 0) {
            return 'your string is empty'
        }
        return str[0].toUpperCase() + str.slice(1);
    }
    ucWords(str) {
        if(typeof str !== 'string' || str === null) {
            return false;
        }
        else if(str.length === 0){
            return 'your string is empty'
        }
        let a = str.trim();
        let b = a.replace(/ {1,} /g, '' );
        let c = b.toLowerCase();
        let d = c.split(' ');
        let e = d.map(str => str[0].toUpperCase() + str.slice(1));
        let f = e.join(' ');
        return f;
    }
}
let str = new MyString();
console.log(str.reverse('lera'));
console.log(str.ucFirst('lera'));
console.log(str.ucWords('lera lera lera'));

//2)Реализуйте класс Validator, который будет проверять строки.
// К примеру, у него будет метод isEmail параметром принимает строку и проверяет,
// является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false.
// Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена,
// метод isDate для проверки даты и метод isPhone для проверки телефона:

// function isEmail(string) {
//     if(typeof string !== 'string' || string === null) {
//         return false;
//     }
//     else if(string.length === 0){
//         return 'your string is empty'
//     }
//     x = string.toLowerCase().split('');
//     y = x.includes('@', '.');
//
// return y;
// }
// console.log(isEmail('valera@mail.ru'));

// function isDomen(string) {
//     if(typeof string !== 'string' || string === null) {
//         return false;
//     }
//     else if(string.length === 0){
//         return 'your string is empty'
//     }
//    return ((string.indexOf('.com') !== -1) || (string.indexOf('.net') !== -1))
//
// }
// console.log(isDomen('test.nek'));

// function isDate(string) {
//         let date = string.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
//         if(date === null){
//             return 'invalid input data';
//         } else {
//             return true
//         }
//     }
//   console.log(isDate('23.08.1995'))
//
// function isPhone(string) {
//     let phone = string.match(/\+380\ \([0-9]{2}\)\ [0-9]{2}-[0-9]{2}-[0-9]{3}/);
//     return phone === null ? false : true;
// }
// console.log(isPhone('+380 (29) 817-68-92'))

// class Validator {
//     constructor() {
//     }
//     isEmail(string) {
//     if(typeof string !== 'string' || string === null) {
//         return false;
//     }
//     else if(string.length === 0){
//         return 'your string is empty'
//     }
//     let x = string.toLowerCase().split('');
//     let y = x.includes('@', '.');
//
// return y;
// }
//     isDomen(string) {
//     if(typeof string !== 'string' || string === null) {
//         return false;
//     }
//     else if(string.length === 0){
//         return 'your string is empty'
//     }
//    return ((string.indexOf('.com') !== -1) || (string.indexOf('.net') !== -1))
// }
//     isDate(string) {
//         if(typeof string !== 'string' || string === null) {
//             return false;
//         }
//         else if(string.length === 0){
//             return 'your string is empty'
//         }
//         let date = string.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
//         if(date === null){
//             return 'invalid input data';
//         } else {
//             return true
//         }
//     }
//     isPhone(string) {
//         if(typeof string !== 'string' || string === null) {
//             return false;
//         }
//         else if(string.length === 0){
//             return 'your string is empty'
//         }
//     let phone = string.match(/\+380\ \([0-9]{2}\)\ [0-9]{2}-[0-9]{2}-[0-9]{3}/);
//     if(phone === null){
//         return false;
//     } else {
//         return true
//     }
// }
// }
// let validator = new Validator();
// console.log(validator.isEmail('valera@mail.ru'));
// console.log(validator.isDomen('test.nek'));
// console.log(validator.isDate('23.08.1995'));
// console.log(validator.isPhone('+380 (67) 94-38-023'));