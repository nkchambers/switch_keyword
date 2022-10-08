// CODECADEMY JAVASCRIPT PRACTICE - switch_keyword assignment

// STARTING CODEBASE
let athleteFinalPosition = 'first place';

// Task 1 - Let’s write a switch statement to decide what medal to award an athlete.
// athleteFinalPosition is already defined at the top of main.js. 
// So start by writing a switch statement with athleteFinalPosition as its expression. 

// Task 2 - Inside the switch statement, add three cases:
// The first case checks for the value 'first place'
// If the expression’s value matches the value of the case then console.log() the string 'You get the gold medal!'
// The second case checks for the value 'second place'
// If the expression’s value matches the value of the case then console.log() the string 'You get the silver medal!'
// The third case checks for the value 'third place'
// If the expression’s value matches the value of the case then console.log() the string 'You get the bronze medal!'

// Task 3 - Now, add a default statement at the end of the switch that uses console.log() to print 'No medal awarded.'.
// If athleteFinalPosition does not equal any value of our cases, then the string 'No medal awarded.' is logged to the console.


switch (athleteFinalPosition) {
    case 'first place':
        console.log('You get the gold medal!');
        break;
    case 'second place':
        console.log('You get the silver medal!');
        break;
    case 'third place':
        console.log('You get the bronze medal!');
        break;
    default:
        console.log('No medal awarded.');
        break;
}