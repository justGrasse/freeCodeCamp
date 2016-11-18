
function makeFriendlyDates(arr) {
  
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  function dateArray(arr){
  	var dateArr = arr.split('-'); 
  	dateArr = dateArr.map(function(num){
  		return parseInt(num);  	
  	});
  	return dateArr;
  }

  function makeFriendly(date){
  	var day = date[2];
  	var month = date[1];
  	var year = date[0];
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

  function sameDay(date1,date2){
  	date1Val = date1[0]*1000000+date1[1]*1000+date1[2];
  	date2Val = date2[0]*1000000+date2[1]*1000+date2[2];
  	return date1Val == date2Val;
  }

  // Function to determine whether date2 is less than a year away from date1
  // dates = 
  function withinYear(date1,date2){
  	date1Val = date1[0]*1000000+date1[1]*1000+date1[2];
  	date2Val = date2[0]*1000000+date2[1]*1000+date2[2];
  	nextYearVal = date1Val + 1*1000000;

  	return date2Val < nextYearVal;
  }

  // Function to determine whether date2 is in same month as date1
  // dates = 
  function thisMonth(date1,date2){
  	if ((date1[0] == date2[0])&&(date1[1] == date2[1])){
  		return true;
  	}
  	return false;
  }


  date1 = dateArray(arr[0]);
  date2 = dateArray(arr[1]);

  var isSameDay = sameDay(date1, date2);
  var isWithinYear = withinYear(date1, date2);
  var isThisMonth = thisMonth(date1, date2);

  date1 = makeFriendly(date1);
  date2 = makeFriendly(date2);
  console.log(date1);
  console.log(date2);

  if (isWithinYear && date1[2]==", 2016") {
  	date1.splice(2,1);
  }

  if (isWithinYear) {
  	date2.splice(2,1);
  }

  if (isThisMonth) {
  	date2.splice(0,1);
  }

  console.log("date1: " + date1);
  console.log("date2: " + date2);

  if (isSameDay){
  	friendlyDates = [date1.join('')];  	
  } else {
  	friendlyDates = [date1.join(''), date2.join('')];
	}
  console.log(friendlyDates);	
  return friendlyDates;

}

makeFriendlyDates(["2018-01-13", "2018-01-13"]);
// should return ["January 13th, 2018"].


// makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]