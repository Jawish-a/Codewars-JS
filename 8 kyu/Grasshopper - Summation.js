/* 

Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

*/


var summation = function (num) {
    return [...Array(num)].map(n => num--).reduce((a, b) => a + b)
}

// best answer

var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
        result += i;
    }

    return result;
}

