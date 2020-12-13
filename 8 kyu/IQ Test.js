/* 

Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

##Examples :

iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

 */


function iqTest(numbers) {
    numbers = numbers.split(" ")
    let odds = {
        'count': 0,
        'value': 0,
    }
    let evens = {
        'count': 0,
        'value': 0,
    }
    numbers.forEach(number => {
        if (number % 2 === 0) {
            evens['count'] = evens['count'] + 1;
            evens['value'] = number;
        }
        else {
            odds['count'] = odds['count'] + 1
            odds['value'] = number
        }
    })

    if (odds['count'] === 1) {
        return numbers.indexOf(odds['value']) + 1
    }
    return numbers.indexOf(evens['value']) + 1
}


// Best Answer

function iqTest(numbers) {
    numbers = numbers.split(" ").map(function (el) { return parseInt(el) });

    var odd = numbers.filter(function (el) { return el % 2 === 1 });
    var even = numbers.filter(function (el) { return el % 2 === 0 });

    return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}