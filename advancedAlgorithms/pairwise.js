
function pairwise(arr, arg) {
  var totalSum = 0;
  var usedIndices = [];

  // For short arrays of 0 or 1 element
  if (arr.length <= 1){ return totalSum; }

  // Iterate through each element of array
  for (var i = 0; i < arr.length; i++){
  	console.log("i is: " + i);
  	// If this value has already been used
  	if (usedIndices.indexOf(i) >=0){
  		console.log("Ignoring this one!");
  		// Ignore it
  		continue;
  	}

  	// Iterate through the following items in array
  	for (var j = 1 + i; j < arr.length; j++){
  		console.log("j is: " + j);
  	// If this value has already been used
  		if ((usedIndices.indexOf(j) >=0)||(usedIndices.indexOf(i)>=0)){
  			console.log("Ignoring this one!");
  			// Ignore it
  			continue;
  		}  		

  		// If the sum is the result
  		if (arr[i]+arr[j] == arg){
  			console.log("arr[i] is: " + arr[i]);
  			console.log("arr[j] is: " + arr[j]);
  			// Add the indices to the total sum
				totalSum += i + j;
  			// Add the letters to the used array
  			usedIndices.push(i,j);
  		}
  	}
  }

  console.log("totalSum is: " + totalSum);
  console.log("usedIndices is: " + usedIndices); 
  return totalSum;
}


pairwise([1, 1, 1], 2);

