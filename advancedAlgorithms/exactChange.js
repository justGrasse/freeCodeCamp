
function checkCashRegister(price, cash, cid) {
	var change = 100 * (cash - price);
	var changeNames = ['PENNY','NICKEL','DIME','QUARTER','ONE','FIVE','TEN','TWENTY','ONE HUNDRED'];
	var changeAmounts = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];

	var changeTotal = [];
	for (var i in cid) { 
		cid[i][1] = Math.round(cid[i][1] * 100);
		changeTotal.push(cid[i][1]); 
	}

	var totalCID = 0;
	for (var i in changeTotal) {
		changeTotal[i] = Math.round(changeTotal[i]);
		totalCID += changeTotal[i]; 
	}

	if (change == totalCID){
		return "Closed";
	}

	var returnChange = [];

	for (var i = 8; i >= 0; i--){
		if ((change > changeAmounts[i]) && (changeTotal[i] != 0)){
			returnChange.push([changeNames[i],0]);
		}

		while ((change >= changeAmounts[i]) && (changeTotal[i] != 0)){
			change -= changeAmounts[i];
			changeTotal[i] -= changeAmounts[i];
			returnChange[returnChange.length - 1][1] += changeAmounts[i];
		}
	}

	for (var i in returnChange) { 
		returnChange[i][1] /= 100;
	}

	if (change == 0){
		return returnChange;
	}	else {
		return "Insufficient Funds";
	}
	// if change >

}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

var result = checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

console.log(result);