$(document).ready(function(){

	var num_str = "";	// Number String
	var num_1, num_2, num_solution;
	var opr_str = "";	// Operator String
	var screen = $("#screen");

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

	// printError(): Prints Error and resets parameters
	function printError(){
		screen.text('ERROR: You got Poo Brain!');
		num_str = '';
		num_1 = null;		
		num_2 = null;		
		num_solution = null;
		opr_str = '';		
	}

	
	// TESTS
	// ...

/*
	PSEUDO-CODE
	- initialize num_str, op_str
	- initialize num_1, num_2, num_solution
	
	BUTTON OPERATOR
	- IF Number.click
		- Push to num_str
	- ELSE IF Operator.click AND opr_str.empty
		- Note Operator
		- Set num_1 = parseInt(num_str)
		- Initialize num_str
	- ELSE IF Operator.click 
		- 
 

					*/


});