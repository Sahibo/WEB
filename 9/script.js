calculate();

function showResult(reversedNumber) {
    alert(reversedNumber);
}

function calculate() {
    let number = prompt("Enter a three-digit number:");
    var reversedNumber = 0;

  try {
    if (isNaN(number)) {
      throw "Please enter a number.";
    }
      
    else if (number > 999 || number < 100) {
      throw "The number must be a three-digit";
    }
  
    reversedNumber += number % 10;
    number = Math.floor(number / 10);

    reversedNumber = reversedNumber * 10 + (number % 10); 
    number = Math.floor(number / 10); 

    reversedNumber = reversedNumber * 10 + (number % 10);


    showResult(reversedNumber);
  }
    
  catch (e) {
    alert(`Invalid input. ${e}`);
  }
}

