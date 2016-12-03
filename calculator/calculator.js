$(document).ready(function(){

	var num_str = '0';	// Number String
	var num_1, num_2, num_solution;
	var opr_str = '';	// Operator String
	var screen = $('#screen');

	// printScreen(): Prints num_str or input message
	function printScreen(message){
		if (message != undefined){
			screen.text(message);
		}
		else if (num_str == '0' || num_str == '') {
			screen.text('0');
		} 
		else {
			screen.text(num_str);
		};
	}

	// printError(): Prints Error
	function printError(){
		screen.text('ERROR: You got Poo Brain!');
		clearData();
	}

	function clearData(){
		num_str = '0';
		num_1 = null;		
		num_2 = null;		
		opr_str = '';	
	}

	function doMath(){
		switch(opr_str){
			case '+':
				num_solution = num_1 + num_2;
				break;
			case '-':
				num_solution = num_1 - num_2;
				break;
			case 'x':
				num_solution = num_1 * num_2;
				break;
			case '/':
				num_solution = num_1 / num_2;
				break;
			}
	}

	// CALCULATOR FUNCTIONS

	$(".num").click(function(){
		if (num_str == '0') num_str = '';		
		num_str += $(this).attr('id');
		printScreen();
	})
	
	$(".opr").click(function(){
		opr_str = $(this).attr('id');
		if (num_1 == undefined) {
			num_1 = parseFloat(num_str);
			num_str = '';
		} else if (opr_str == undefined) {
			opr_str = $(this).attr('id'); 
		} else if (num_solution == undefined) {

		}
	})

	$("#eq").click(function(){
		if (num_1 != undefined && opr_str != undefined) {
			num_2 = parseFloat('0'+num_str)
			doMath()
			printScreen(num_solution);
			clearData();
		}
	})
	
	$("#dec").click(function(){
		if (num_str == '') num_str = '0';		
		num_str += '.';
		printScreen();
	})	

	$("#screen").click(function(){
		clearData();
		printScreen();
	})

	// GRAPHICAL QUIRKS

	$("#screen").hover(function(){
		$(this).css('background-color','#666');
		}, function(){
		$(this).css('background-color','#222');
		}
	)


	// TESTS
	// ...

/*
	PSEUDO-CODE
	- initialize num_str, op_str
	- initialize num_1, num_2, num_solution
	
	BUTTON OPERATOR
	- IF Number.click
		- Push to num_str
		- IF num_str = '0'
			- Initialize num_str = ''
	- ELSE IF Operator.click AND opr_str.empty
		- Note Operator
		- Set num_1 = parseInt(num_str)
		- Initialize num_str
	- ELSE IF Operator.click 
		- 
 

					*/


});