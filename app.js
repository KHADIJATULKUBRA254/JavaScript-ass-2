//-----CHAPTER(6-9)-----//
//---QUESTION#1---//
let number = 5; 
let result = (number + 5) * 10 / 2; 
document.write(`The result of the arithmetic operations is: ${result}`);

//---QUESTION#2---//
var a = 2, b = 1;
var results = --a - --b + ++b + b--;
document.write(`a = ${a}, b = ${b}, results = ${results}`);

//---QUESTION#3---//
let userName = prompt("Enter your name:");
alert(`Hello, ${userName}! Welcome to our website.`);

//---QUESTION#5---//
let num = parseInt(prompt("Enter a number for the multiplication table:", "5")) || 5;

document.write(`<h3>Multiplication Table of ${num}</h3>`);
for (let i = 1; i <= 10; i++) {
  document.write(`${num} x ${i} = ${num * i}<br>`);
}

//---QUESTION#6---//
let subject1 = prompt("Enter the name of the first subject:");
let subject2 = prompt("Enter the name of the second subject:");
let subject3 = prompt("Enter the name of the third subject:");

const totalMarks = 100;

let obtained1 = parseInt(prompt(`Enter marks obtained in ${subject1}:`));
let obtained2 = parseInt(prompt(`Enter marks obtained in ${subject2}:`));
let obtained3 = parseInt(prompt(`Enter marks obtained in ${subject3}:`));

let totalObtained = obtained1 + obtained2 + obtained3;
let percentage = (totalObtained / (totalMarks * 3)) * 100;

document.write(`
  <table border="1">
    <tr>
      <th>Subject</th>
      <th>Total Marks</th>
      <th>Obtained Marks</th>
    </tr>
    <tr>
      <td>${subject1}</td>
      <td>${totalMarks}</td>
      <td>${obtained1}</td>
    </tr>
    <tr>
      <td>${subject2}</td>
      <td>${totalMarks}</td>
      <td>${obtained2}</td>
    </tr>
    <tr>
      <td>${subject3}</td>
      <td>${totalMarks}</td>
      <td>${obtained3}</td>
    </tr>
    <tr>
      <td colspan="2"><strong>Total</strong></td>
      <td><strong>${totalObtained}</strong></td>
    </tr>
    <tr>
      <td colspan="2"><strong>Percentage</strong></td>
      <td><strong>${percentage.toFixed(2)}%</strong></td>
    </tr>
  </table>
`);

//-----CHAPTER(9-11)-----//
//---QUESTION#1---//
let city = prompt("Enter your city name:");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights");
}

//---QUESTION#2---//
let gender = prompt("Enter your gender:");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma’am.");
} else {
    alert("Invalid gender input.");
}

//---QUESTION#3---//
let signalColor = prompt("Enter the traffic signal color:");
if (signalColor.toLowerCase() === "red") {
    alert("Must Stop");
} else if (signalColor.toLowerCase() === "yellow") {
    alert("Ready to move");
} else if (signalColor.toLowerCase() === "green") {
    alert("Move now");
} else {
    alert("Invalid color input.");
}

//---QUESTION#4---//
let fuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

//---QUESTION#6---//
let marks1 = parseInt(prompt("Enter marks for subject 1:"));
let marks2 = parseInt(prompt("Enter marks for subject 2:"));
let marks3 = parseInt(prompt("Enter marks for subject 3:"));
let totallMarks = parseInt(prompt("Enter total marks:"));

let obtainedMarks = marks1 + marks2 + marks3;
let percentagee = (obtainedMarks / totallMarks) * 100;
let grade, remarks;

if (percentagee >= 80) {
    grade = "A+";
    remarks = "Excellent";
} else if (percentagee >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentagee >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write(`
    <h3>Marks Sheet</h3>
    <p>Total Marks: ${totallMarks}</p>
    <p>Marks Obtained: ${obtainedMarks}</p>
    <p>Percentage: ${percentagee.toFixed(2)}%</p>
    <p>Grade: ${grade}</p>
    <p>Remarks: ${remarks}</p>
`);

//---QUESTION#7---//
let secretNumber = 7; 
let guess = parseInt(prompt("Guess the secret number (1-10):"));

if (guess === secretNumber) {
    alert("Bingo! Correct answer.");
} else if (guess === secretNumber + 1 || guess === secretNumber - 1) {
    alert("Close enough to the correct answer.");
} else {
    alert("Try again!");
}

//---QUESTION#8---//
let numberr = parseInt(prompt("Enter a number:"));
if (numberr % 3 === 0) {
    alert("The number is divisible by 3.");
} else {
    alert("The number is not divisible by 3.");
}

//---QUESTION#9---//
let nummber = parseInt(prompt("Enter a number:"));
if (nummber % 2 === 0) {
    alert("The number is even.");
} else {
    alert("The number is odd.");
}

//---QUESTION#10---//
let temperature = parseFloat(prompt("Enter the temperature:"));
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It’s very cold outside.");
}

//---QUESTION#11---//
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");

let resultt;
if (operation === "+") {
    resultt = num1 + num2;
} else if (operation === "-") {
    resultt = num1 - num2;
} else if (operation === "*") {
    resultt = num1 * num2;
} else if (operation === "/") {
    resultt = num1 / num2;
} else if (operation === "%") {
    resultt = num1 % num2;
} else {
    resultt = "Invalid operation";
}

alert(`Result: ${resultt}`);
