// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    const charMap = {};

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    // Using "-"(minus) for ascending order.
    const orderedChars = Object.keys(charMap).sort((a, b) => - (charMap[a] - charMap[b]));

    return orderedChars[0];
}

// console.log(maxChar("apple 1231111"));
// console.log(maxChar("1223334444"));

module.exports = maxChar;
