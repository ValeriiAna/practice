function isPalindrome(str) {
    if(typeof str !== 'string' || str === null || str === '' ){
        return false;
    }
    for(let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i])
        return false;
    }

    return true;
}

module.exports = isPalindrome;