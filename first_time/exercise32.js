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
    
}

function getCardType(number) {
    var cardType;
    if (isVisa(number) === true) {
        cardType = 'Visa';
    } else if (isAmerEx(number) === true) {
        cardType = 'American Express';
    } else if (isMaster(number) === true) {
        cardType = 'MasterCard';
    } else if (isDiscover(number) === true) {
        cardType = 'Discover';
    } else if (isDiner(number) === true) {
        cardType = 'Diner\'s Club';
    } else {
        cardType = 'Invalid'
    } 
}

// Visa
function isVisa(number) {
    var nums = number.split('');
    if (number.length !== 13 || number.length !== 16) {
        return false;
    } else if (visaNums[0] !== 4) {
        return false;
    }
    return true;
}

//American Express
function isAmerEx(number) {
    var nums = number.split('');
    if (number.length !== 15) {
        return false;
    } else if (nums[0] !== 3) {
        return false;
    } else if (nums[1] !== 4 || nums[1] !== 7) {
        return false;
    }
    return true;
}

//MasterCard
function isMaster(number) {
    
}

//American Express
function isDiscover(number) {
    
}

//American Express
function isDiner(number) {
    
}