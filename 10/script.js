calculate();

function showResult(result) {
    alert(result);
}

function calculate() {
    var number = prompt("Enter your number: ");

  try {
    if (isNaN(number)) {
      throw "Please enter a number.";
    }
  

    const isEven = number % 2 === 0;
    const result = isEven ? "number is even" : "number is odd";

    showResult(result);
  }
    
  catch (e) {
    alert(`Invalid input. ${e}`);
  }
}