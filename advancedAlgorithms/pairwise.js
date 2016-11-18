
function pairwise(arr, arg) {
  var totalSum = 0;
  var usedIndices = [];

  // For short arrays of 0 or 1 element
  if (arr.length <= 1){ return totalSum; }

  // Iterate through each element of array
  for (var i in arr){
  	// If this value has already been used
  	if (usedNumbers.indexOf(arr[i]) >=0){
  		// Ignore it
  		continue;
  	}
  		// Ignore it
  		if (arr[i] == arr[j]) { continue; }
  	}
  }

  return totalSum;
}


pairwise([1,4,2,3,0,5], 7);
