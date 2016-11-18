
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  var finalPeriod = [];


  for (var i in arr){
		var rad = earthRadius + arr[i]['avgAlt'];
		var pi = Math.PI;
		var orbPeriod = 2*pi*Math.sqrt(Math.pow(rad,3)/GM);
		finalPeriod.push({});
		finalPeriod[i]['name'] = arr[i]['name'];
		finalPeriod[i]['orbitalPeriod'] = parseInt(Math.round(orbPeriod));
  }

  console.log(finalPeriod);
  return finalPeriod;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);