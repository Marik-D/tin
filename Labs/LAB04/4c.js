function isPalindrome(str) {
    str = str.toLowerCase();
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return str === reverse;
};

console.log(isPalindrome("Fghjjhgf"));
console.log(isPalindrome("fghjk"));