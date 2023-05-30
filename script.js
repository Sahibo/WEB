// 1

var num1 = parseInt(prompt("Enter first number: "));
var num2 = parseInt(prompt("Enter second number:"));

function addNumber(num1, num2)
{
    if(num1 < num2)
       return -1;

    if (num1 > num2)
       return 1

    else 
       return 0

}

var result = addNumber();
prompt(result);

// 2

var num = parseInt(prompt("Enter a number to calculate its factorial:"));

function calculateFactorial(num)
{
    var result = 1;

    for (var i = 2; i <= num ; i++)
    {
        result *= i;
    }
    return result;
}

var result = calculateFactorial(num);

prompt("The factorial of number: " + number + " is - " + result);

// 3

var digit1 = parseInt(prompt("Enter first digit:"));
var digit2 = parseInt(prompt("Enter second digit:"));
var digit3 = parseInt(prompt("Enter third digit:"));

function threeDigit(digit1, digit2, digit3) 
{
    var result = parseInt("" + digit1 + digit2 + digit3);
    return result;
}


var result = threeDigit(digit1, digit2, digit3);
prompt("Result: " + result);


// 4

var lenght = parseFloat(prompt("Enter the length of the rectangle: "));
var width = parseFloat(prompt("Please enter the width of the rectangle(leave it blank for a square): "));

function Rectangle(lenght, width)
{
    if  (width === undefined)
        return lenght * lenght;
    else
        return width * lenght;
}

var area = Rectangle(lenght, width);
prompt("The area of the rectangle is equal to: " + area);

// 5

function perfectNumber(num) 
{
    var sum = 0;

    for (var i = 1; i < num; i++) 
    {
        if (num % i === 0)
            sum += i;
        
    }

    return sum === num;
}

var num = parseInt(prompt("Enter your number :"));

if (perfectNumber(num)) 
    prompt(num + " - is a perfect number");

else 
    prompt(num + " - is not a perfect number");

// 6

function findPerfectNumbers(min, max) 
{
    var perfectNumbers = [];

    for (var num = min; num <= max; num++) 
    {
        if (PerfectNumber(num))
            perfectNumbers.push(num);
        
    }

    return perfectNumbers;
}

var min = parseInt(prompt("Min:"));
var max = parseInt(prompt("Max:"));

var perfectNumbers = findPerfectNumbers(min, max);

if (perfectNumbers.length === 0) 
    prompt("There are no perfect numbers in the specified range.");
else 
    prompt("Perfect numbers: " + perfectNumbers.join(", "));


// 7


function FormatTime (hours, minutes, seconds)
{
    if (minutes === undefined)
        minutes == "00";

    if (seconds === undefined)
        seconds == "00";

    return hours + ":" + minutes + ":" + seconds;
}

var hours = parseInt(prompt("Enter hours: "));
var minutes = parseInt(prompt("Enter minutes: "));
var seconds = parseInt(prompt("Enter seconds: "));

var Timeform = FormatTime(hours, minutes, seconds);
prompt("Time  " + Timeform);

// 8

function ConvertToSeconds(hours, minutes, seconds) 
{
    var totalSeconds = 0;

    totalSeconds += hours * 3600;
    totalSeconds += minutes * 60;
    totalSeconds += seconds;

    return totalSeconds;
}

var hours = parseInt(prompt("Enter hours:"));
var minutes = parseInt(prompt("Enter minutes:"));
var seconds = parseInt(prompt("Enter seconds:"));

var secondsTotal = ConvertToSeconds(hours, minutes, seconds);
prompt("Time in seconds: " + secondsTotal);


// 9

function ConvertToTime(seconds) 
{
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var remainingSeconds = seconds % 60;

    var formattedTime = addZeroPadding(hours) + ":" + addZeroPadding(minutes) + ":" + addZeroPadding(remainingSeconds);
    return formattedTime;
}

function addZeroPadding(value) 
{
    return value < 10 ? "0" + value : value;
}

var seconds = parseInt(prompt("Enter count of seconds:"));

var timeString = ConvertToTime(seconds);
prompt("Time: " + timeString);

//  10


function getTimeDifference(hours1, minutes1, seconds1, hours2, minutes2, seconds2) 
{
    var secondsTotal1 = convertToSeconds(hours1, minutes1, seconds1);
    var secondsTotal2 = convertToSeconds(hours2, minutes2, seconds2);

    var differenceSeconds = Math.abs(secondsTotal1 - secondsTotal2);

    var timeString = convertToTime(differenceSeconds);

    return timeString;
}

function convertToSeconds(hours, minutes, seconds) 
{
    var totalSeconds = 0;

    totalSeconds += hours * 3600;
    totalSeconds += minutes * 60;
    totalSeconds += seconds;

    return totalSeconds;
}

function convertToTime(seconds) 
{
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var remainingSeconds = seconds % 60;

    var formattedTime = addZeroPadding(hours) + ":" + addZeroPadding(minutes) + ":" + addZeroPadding(remainingSeconds);
    return formattedTime;
}

function addZeroPadding(value) {
    return value < 10 ? "0" + value : value;
}

var hours1 = parseInt(prompt("Enter the hours of the first date:"));
var minutes1 = parseInt(prompt("Enter the minutes of the first date:"));
var seconds1 = parseInt(prompt("Enter the seconds of the first date:"));

var hours2 = parseInt(prompt("Enter the hours of the second date:"));
var minutes2 = parseInt(prompt("Enter the minutes of the second date:"));
var seconds2 = parseInt(prompt("Enter the seconds of the second date:"));

var differenceTime = getTimeDifference(hours1, minutes1, seconds1, hours2, minutes2, seconds2);
prompt("Time difference: " + differenceTime);
