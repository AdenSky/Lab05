// let miles;
// let gallons;
// let mpg;
// let again = 'y';

// do {
//     miles = parseFloat(prompt('Enter miles driven'));
//     gallons = parseFloat(prompt('How many gallons does your car\'s tank hold'));
//     if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
//         mpg = miles / gallons;
//         console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`);
//     } else {
//         alert('One or both entries are invalid.');
//     }
//     again = prompt('Run application again? (y or n)', 'y');

//     while(again!=='y' || again !=='n'){
//         alert("Please enter valid answer.")
//         continue;
//     }
  

// } while (again === 'y');
// console.log('Application has exited.');

// Lab6
// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
rate = parseFloat(prompt('Enter interest rate between 0 to 6:'));
years = parseInt(prompt('Enter the number of years between 1 to 30:'));

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; 0<i<30; i++) {
    if(!isNaN(investment) && !isNaN(rate) && 0<rate<6 && 1<years<30)
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);