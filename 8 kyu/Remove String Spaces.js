/* 

Simple, remove the spaces from the string, then return the resultant string.



*/

function noSpace(x) {
    return x.split(" ").join("")
}


// best answer

function noSpace(x) {
    return x.replace(/\s/g, '');
}