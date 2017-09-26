/*
EXERCISE 1:

        Write a small function called "square" that takes a parameter called "num" and returns the square of "num".
        
        For example:

        square(3) should return 9
        square(1) should return 1
        square(-1) should return 1
*/

function square(num){ 
    var squared = num * num;
    return squared;
}

/* OR
function square(num){
    var val = Math.pow(num, 2);
    return val;
}
*/