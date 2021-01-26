// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {
    return str.split('').reduce((rev, char) => rev + char, '');
}


/* 
// Solution 2 with for loop.
function reverse(str) {
    let reversedStr = "";

    // for (let n = - 1; n > -str.length - 1; n--) {
    //     reversedStr = reversedStr + str.substr(n, 1);
    // }

    for (let character of str) {
        reversedStr = character + reversedStr;

        // debugger;
    }


    return reversedStr;
}
 */


/* 
// Solution 1 with built-in functions
function reverse(str) {
    return str
        .split('')
        .reverse()
        .join('');
}
*/


// console.log(reverse("123"));


module.exports = reverse;
