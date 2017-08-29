/*
EXERCISE 14:

        Write a small function called "getAvg" that takes a parameter called "arr" and returns the avg of all the values in "arr".
        
        For example:

        getAvg([1,2,3]) should return 2
        getAvg([4,4,5,5]) should return 4.5
        getAvg([-1,0,-3,2]) should return -.5
*/

function getAvg(arr){
    var sum = 0;
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        count++;
    }
    return sum / count;
}