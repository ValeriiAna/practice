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

module.exports = {str}