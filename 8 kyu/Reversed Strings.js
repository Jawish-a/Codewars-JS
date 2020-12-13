/* 

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'


 */

function solution(str) {
    return [...str].reverse().join('')
}


// Best solution
function solution(str) {
    return str.split('').reverse().join('');
}
// Another solution
const solution = str => str.split('').reverse().join('');
