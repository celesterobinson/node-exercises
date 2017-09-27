/*
EXERCISE 29:

        Write a function called "isValidPhone" that takes a parameter called "number" and returns whether it is a correctly-formatted irish mobile phone number.

        Valid phone numbers are comprised of 10 numerical digits.
        Valid phone numbers all begin with "08", followed by either a 3, 5, 6, or 7 and then 7 other digits.

        For example:

        isValidPhone("0877654233") should return true
        isValidPhone("0737654233") should return false //doesn't begin with 08
        isValidPhone("08576542336") should return false //wrong number of digits
        isValidPhone("0827654233") should return false //third digit isn't in (3,5,6,7) 
*/

function isValidPhone(number){
    if (number.length !== 10) {
        return false;
    } else if (number[0] !== '0'){
        return false;
    } else if (number[1] !== '8'){
        return false;
    } else if (number[2] !== '3' && number[2] !== '5' && number[2] !== '6' && number[2] !== '7') {
        return false;
    } else if (/[^0-9]/g.test(number)) {
        return false;
    }
    return true;
}