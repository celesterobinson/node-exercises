/*
EXERCISE 10:

        Write a function called "sumOfMultiples" that takes a parameter called "num" and returns the sum of all multiples of "num" up to and including 100.
        
        For example:

        sumOfMultiples(100) should return 100
        sumOfMultiples(1) should return 5000
        sumOfMultiples(50) should return 150
*/

function sumOfMultiples(num){
    var sum = 0;
    for(var i = num; i <= 100; i++){
        if(i % num === 0) {
            sum += i;
        }
    }
    return sum;
}
