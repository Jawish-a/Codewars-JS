/* 

Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

  sumStr("4", "5")    // should output "9"
  sumStr("34", "5")   // should output "39"
If either input is an empty string, consider it as zero.

*/

function sumStr(a, b) {
    return (parseInt(a) || 0) + (parseInt(b) || 0) + ""
}

// best answer

function sumStr(a, b) {
    return String(Number(a) + Number(b));
}

// 2nd best

function sumStr(a, b) {
    return (+a + +b) + ''
}