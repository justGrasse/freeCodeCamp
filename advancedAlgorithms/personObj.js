
var Person = function(fullName) {

	var firstName = fullName.split(' ')[0]; 
	var lastName = fullName.split(' ')[1];
	
	this.getFirstName = function(){
		return firstName;
	};

	this.getLastName = function(){
		return lastName;
	};

	this.getFullName = function(){
		return firstName + ' ' + lastName;
	};

	this.setFirstName = function(name){
		firstName = name;
	};

	this.setLastName = function(name){
		lastName = name;
	};
	this.setFullName = function(name){
		this.setFirstName(name.split(' ')[0]);
		this.setLastName(name.split(' ')[1]);
	};

	return fullName;
};

var bob = new Person('Bob Ross');
bob.getFullName();
