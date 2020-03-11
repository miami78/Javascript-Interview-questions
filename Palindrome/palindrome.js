// A palindrome is a word, sentence or other type of character sequence which reads the same backward as forward. 
// For example, “racecar” and “Anna” are palindromes.
// given a string, return true if the string is a palindrome and false if it isn’t.
// Include spaces and punctuation in deciding if the string is a palindrome.
// For example:

// palindrome('racecar')  ===  true
// palindrome('table')  ===  false

const palindrome = str => {
    // turn the string to lowercase
    str = str.toLowerCase()
    // reverse input string and return the result of the comparison
    return str === str.split('').reverse().join('')
}