/*
EXERCISE 28:

        Write a function called "sameIngredients" that takes two parameters called "str1" and "str2" and returns true/false whether str1 is composed only of characters found in str2 (case-insensitive).

        For example:

        sameIngredients("bob","jane") should return false
        sameIngredients("Bob","bobby") should return true
        sameIngredients("indy books for sale.","KIND Boars left you alone.") should return true
*/

function sameIngredients(str1,str2){
    var count = 0;
    var boolean;
    var string = str2.toLowerCase();
    var substring = str1.toLowerCase();
    var subStr = substring.split('');
    for (var i = 0; i < subStr.length; i++) {
        if (string.includes(subStr[i])) {
            count++;
        }
    }
    if (subStr.length === count) {
        boolean = true;
    } else {
        boolean = false;
    }
    return boolean;  
}