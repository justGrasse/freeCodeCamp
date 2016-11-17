
function permAlone(str) {

	// Array of ALL permutations
	var permArr = [];

	// aStr = the FINAL string; bStr = the unused letters
	function recurStr(aStr, bStr){	
		if (bStr.length == 1){
			permArr.push(aStr + bStr);
		}

		for (var i in bStr){
			newbStr = bStr.replace(bStr[i],'');
			recurStr((aStr+bStr[i]),newbStr);
		}
	}
	
	recurStr('',str);

	doubleLetters = /(.)\1+/;
	total = 0;

	for (var i in permArr){
		if (!permArr[i].match(doubleLetters)){
			console.log(permArr[i]+" has no doubles");
			total += 1;
		}
	}

	console.log("The total is: " + total);

	return total;
}

permAlone('aabc');
