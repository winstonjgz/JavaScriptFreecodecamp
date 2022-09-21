let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/g; // Change this line
let result = pwRegex.test(sampleWord);