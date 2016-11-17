
function permAlone(str) {

	// Array of ALL permutations
	var permArr = [];

	// aStr = the FINAL string; bStr = the unused letters
	function recurStr(aStr, bStr){	
		if (bStr.length == 1){
			permArr.push(aStr + bStr);
		}

		for (var i in bStr){
			bStr = bStr.replace(bStr[i],'');
			recurStr((aStr+bStr[i]),bStr);
		}
	}


  return str;
}

permAlone('abc');
