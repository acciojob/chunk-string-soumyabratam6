function stringChop(str, size) {
  // your code here
	if (!str) return []; // Return empty array if input string is null
    
    // Initialize an empty array to store the chunks
    var chunks = [];
    
    // Loop through the string and slice it into chunks of length chunkLength
    for (var i = 0; i < str.length; i += size) {
        chunks.push(str.slice(i, i + size)); // Push each chunk to the array
    }
    
    return chunks; // Return the array of chunks
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
