/* 

Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in:

"I\n I\n  I"
or printed:

I
 I
  I
Another example, a 7-step stairs should be drawn like this:

I
 I
  I
   I
    I
     I
      I

*/


function drawStairs(n) {
    return n < 1 ? "I" : "I".repeat(n).split('').map((a, index) => " ".repeat(index) + a).join("\n")
}

// best answer

const drawStairs = n => [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");
