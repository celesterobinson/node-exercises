/*
EXERCISE 30:

        Write a function called "isEuroFormat" that takes a parameter called "serial" and returns whether it is a correctly-formatted euro banknote serial number.

        Valid serial numbers are comprised of 12 characters: one capital letter followed by 11 digits

        For example:

        isEuroFormat("X04135981862") should return true
        isEuroFormat("x04135981862") should return false //letter not capitalized
        isEuroFormat("504135981862") should return false //doesn't start with letter
        isEuroFormat("X041359818626") should return false //too many numbers
        isEuroFormat("X0413598186") should return false //not enough numbers
        isEuroFormat("XX4135981862") should return false //too many letters        
*/

function isEuroFormat(serial){
    var serialArr = serial.split('');
    if (serial.length !== 12) {
        return false;
    } else if (/[^A-Z]/g.test(serial[0])) {
        return false;

    } 
    for (var i = 1; i < serialArr.length; i++) {
        if (/[^0-9]/g.test(serialArr[i])) {
            return false;
        }
    }
    return true;
}