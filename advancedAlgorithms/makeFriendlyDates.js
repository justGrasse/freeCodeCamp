
function makeFriendlyDates(arr) {
  
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  function makeFriendly(date){
  	dateArr = date.split('-');
  	fDate = ['','',''];
  	var day = parseInt(dateArr[2]);
  	var month = parseInt(dateArr[1]);
  	var year = parseInt(dateArr[0]);
  	var fDate = [month, day, year];
  	fDate[0] = months[month-1] + ' ';
  	fDate[1] = getDay(day);
  	fDate[2] = ", " + fDate[2];
  	return fDate;	
  }

  function getDay(day){
  	if ([1,21,31].indexOf(day) >= 0){
  		day += "st";
  	} else if ([2,22].indexOf(day) >= 0){
  		day += "nd";
  	} else if ([3,23].indexOf(day) >= 0){
  		day += "rd";
  	} else {
  		day += "th";
  	}
  	return day;
  }

	var friendlyDates = [];
  for (var i in arr){
  	friendlyDates.push(makeFriendly(arr[i]));
  }

  var date1 = friendlyDates[0];
  var date2 = friendlyDates[1];
  

  if (date1[2]==date2[2]){
  	date2.splice(2,1);
  }

  if (date1[2]==", 2016"){
  	date1.splice(2,1);
  }

  if (date1[0]==date2[0]){
  	date2.splice(0,1);
  }

  friendlyDates[0] = date1.join('');
  friendlyDates[1] = date2.join('');

  console.log(friendlyDates);	

  return friendlyDates;

}

makeFriendlyDates(['2016-07-01', '2016-07-04']);



// makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]