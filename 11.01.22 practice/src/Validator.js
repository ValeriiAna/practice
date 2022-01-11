class Validator {
    constructor() {
    }
    isEmail(string) {
        if(typeof string !== 'string' || string === null) {
            return false;
        }
        else if(string.length === 0){
            return 'your string is empty'
        }
        let x = string.toLowerCase().split('');
        let y = x.includes('@', '.');

        return y;
    }
    isDomen(string) {
        if(typeof string !== 'string' || string === null) {
            return false;
        }
        else if(string.length === 0){
            return 'your string is empty'
        }
        return ((string.indexOf('.com') !== -1) || (string.indexOf('.net') !== -1))
    }
    isDate(string) {
        if(typeof string !== 'string' || string === null) {
            return false;
        }
        else if(string.length === 0){
            return 'your string is empty'
        }
        let date = string.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
        if(date === null){
            return 'invalid input data';
        } else {
            return true
        }
    }
    isPhone(string) {
        if(typeof string !== 'string' || string === null) {
            return false;
        }
        else if(string.length === 0){
            return 'your string is empty'
        }
        let phone = string.match(/\+380\ \([0-9]{2}\)\ [0-9]{2}-[0-9]{2}-[0-9]{3}/);
        if(phone === null){
            return false;
        } else {
            return true
        }
    }
}
let validator = new Validator();
console.log(validator.isEmail('valera@mail.ru'));
console.log(validator.isDomen('test.nek'));
console.log(validator.isDate('23.08.1995'));
console.log(validator.isPhone('+380 (67) 94-38-023'));

module.exports = {validator};