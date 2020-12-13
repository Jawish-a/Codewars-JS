/* 

Write function avg which calculates average of numbers in given list.

*/


function find_average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

// best answer

function find_average(array) {
    var sum = array.reduce((a, b) => a + b, 0);
    return sum / array.length;
}