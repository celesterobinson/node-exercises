/*
EXERCISE 32:

        Write a function called "isValidCardFormat" that takes a parameter called "number" and returns whether it is a correctly-formatted credit card number.

        Valid credit card numbers have a prefix (the first numbers) that matches a particular type of card.
        Valid credit card numbers will also have a length that matches the type of card.
                         __________________________________
                         |       Prefix        |  Length  |
                         ----------------------------------
                    Visa |          4          | 13 or 16 |
        American Express |       34 or 37      |    15    |
              MasterCard |        51-55        |    16    |
                Discover |        6011         |    16    |
            Diner's Club | 300-305 or 36 or 38 |    14    |
                         ----------------------------------

        For example:

        isValidCardFormat("4175937769982") should return true //visa with length of 13
        isValidCardFormat("4175937769982456") should return true //visa with length of 16
        isValidCardFormat("3035937769982456") should return false //Diner's Club with a length of 16
        isValidCardFormat("5635937769982456") should return false //Invalid prefix with a length of 16    
*/

function isValidCardFormat(number){
    if(isNumber(number)) {
        return getCardType(number);
    } 
    return false;
}

function getCardType(number) {
    return isVisa(number) ||
    isAmerEx(number) ||
    isMaster(number) ||
    isDiscover(number) ||
    isDiner(number) || false;
}

function isNumber(number) {
    var isnum = /[a-zA-Z]/g;
    if (isnum.test(number)) {
        return false;
    }
    return true;
}

// Visa
function isVisa(number) {
    var nums = number.split('');
    if (number.length === 13 || number.length === 16) {
        if (nums[0] === '4') {
            return true;
        }
    }
    return false;
}


//American Express
function isAmerEx(number) {
    var nums = number.split('');
    if (number.length === 15) {
        if (nums[0] === '3') {
            if (nums[1] === '4' || nums[1] === '7') {
                return true;
            }
        }
    }
    return false;
}

//MasterCard
function isMaster(number) {
    var nums = number.split('');
    if (number.length === 16) {
        if (nums[0] === '5') {
            if (nums[1] === '1' || nums[1] === '2' || nums[1] === '3' || nums[1] === '4' || nums[1] === '5') {
                return true;
            }
        }
    }
    return false;
}

//Discover
function isDiscover(number) {
    var nums = number.split('');
    if (number.length === 16) {
        if (nums[0] === '6') {
            if (nums[1] === '0') {
                if (nums[2] === '1') {
                    if (nums[3] === '1') {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

//Diner's Club
function isDiner(number) {
    var nums = number.split('');
    if (number.length === 14) {
        if (nums[0] === '3') {
            if (nums[1] === '0' || nums[1] === '6' || nums[1] === '8') {
                return true;
            } else if (nums[0] === '3' && nums[1] === '0') {
                if (nums[2] === '0' || nums[2] === '1' || nums[2] === '2' || nums[2] === '3' || nums[2] === '4' || nums[2] === '5') {
                    return true;
                }
            }
        }
    }
    return false;
}