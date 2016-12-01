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

printError();

// printScreen();

// num_str += "Ike's got Poo-Brain!";
// printScreen();


/*
	PSEUDO-CODE
	- initialize num_str, op_str
	- IF Number
		- Push to num_str
	- ELSE IF Operator AND opr_str.empty
		- Note Operator
		- Set num_1 = parseInt(num_str)
		- Initialize num_str
	- ELSE IF Operator 
		- 
 
	SCREEN:
	- IF num_str is empty or 0
		- Display 0
	- ELSE 
		- Display num_str

					*/


});