/*
EXERCISE 26:

        Write a function called "isPalindrome" that takes a parameter called "str" and returns whether "str" is a palindrome without respect to punctuation, spaces, or capitalization.
        
        For example:

        isPalindrome("Tacocat .") should return true
        isPalindrome("Niagara") should return false
        isPalindrome("T ac' ocat.   ") should return true
*/

function isPalindrome(str){
    str = str.toLowerCase();
    var boolean;
    var newStr = str.replace(/\W/g,'');
    var newStrRev = newStr.split('').reverse().join('');
        if(newStr === newStrRev) {
            boolean = true;
        } else {
            boolean = false;
        }
    return boolean;
}