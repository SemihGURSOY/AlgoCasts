// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// "fizz" instead of the number and for the multiples
// of five print "buzz". For numbers which are multiples
// of both three and five print "fizzbuzz".
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {

    const conditions = { 3: 'fizz', 5: 'buzz' };

    for (let i = 1; i <= n; i++) {
        let output = '';

        for (let cond in conditions) {
            if (i % parseFloat(cond) === 0) output += conditions[cond];
        }

        output = output === '' ? i : output;

        console.log(output);
    }

}

// fizzBuzz(15);

module.exports = fizzBuzz;
