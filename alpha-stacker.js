var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

for (var j = 0; j < alphabet.length; j++) {
  if ((j + 1) % 3 === 0) {
    alphabet[j] = alphabet[j] + " ";
  }
}

function stackLetters (theAlphabetArray) {
	for (var i = 0; i < theAlphabetArray.length; i++) {
		var letters = theAlphabetArray.slice(0, i + 1);
		console.log(letters.join("")); // join() contatentates and the "" removes the commas
		}
}

stackLetters(alphabet);
