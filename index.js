function isPalindrome(word) {
    // Convert the word to lowercase to handle case-insensitivity.
    const lowercaseWord = word.toLowerCase();
  
    // Removing  non-letter characters using regex.
    const cleanWord = lowercaseWord.replace(/[^a-z]/g, '');
  
    // Reversing the cleaned word.
    const reversedWord = cleanWord.split('').reverse().join('');
  
    // Checking if the reversed word is equal to the original word.
    return cleanWord === reversedWord;
  }
  
  // Custom Tests:
  if (require.main === module) {
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar")); // Should return true
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot")); // Should return false
  }
  
  module.exports = isPalindrome;
  