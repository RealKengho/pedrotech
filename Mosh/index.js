    // This is my first Javascript code!
    //console.log('hello world');

    // variables
    //let name = 'Kev';
    //console.log(name);
    
    // Cannot be a reserved keyword, let if else var.
    // Should be meaningful. Not x1 or a1.
    // Cannot start with a number.
    // Cannot contain a space or hyphen.

    //let firstName = 'Kevin';
    //let lastName = 'Williams';
    //console.log(firstName, lastName);


    // constants
    //const interestRate = 0.3  
    //interestRate = 1;
    //console.log(interestRate);

    // primitive types
    //primitive / value types
    // string
    // number
    // boolean
    // null
    // undefined
    // symbol
    // object

    //let name = 'Kevin'; // string literal
    //let age = 30; // number literal
    //let isApproved = true; // boolean literal, want to have some logic. True or False.
    //let firstName = undefined; // undefined
    //let lastName = null; // null, explicitly clear a value of a variable.


    //reference types
    // objects
    // arrays

    let selectedColors = ['red', 'blue'];
    selectedColors[2] = 'green';
    console.log(selectedColors[0]);

    // functions

    function greet(name, lastName) {
      console.log('Hello ' + name + ' ' + lastName);
    }

    greet('Kevin', 'Smith');
 

    //let person = {
     // name: 'Kevin',
      ///age: 30,
    //};
    //console.log(person);

    // dot notation easier and cleaner
   // person.name = 'Steven';

    // Bracket notation
    //let selection = 'name';
    //person ['selection'] = 'Mary';
    //console.log(person.name);



    // classes
    // dates
    // regular expressions







    // Languages

    // Statically typed string name = 'Kevin';

    // Dynamically typed let name = 'Kevin';
    // Javascript is dynamically typed.

    // typeof to check the type of a variable.


    // Calculating a value
    function square(number) {
      return number * number;
    }

    console.log(square(2));