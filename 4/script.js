calculateSquare();

function showSquare(Square) {
    alert(`S - ${Square}`);
}

function calculateSquare() {
  let radius = prompt("Enter a length of the radius: ");

  try {
    if (isNaN(radius)) {
      throw "Please enter a number.";
    }
      
    else if (radius < 0) {
      throw "Lenght cannot be less than 0.";
    }
  
      var Square =  3.14 * parseInt(radius) * parseInt(radius);
      showSquare(Square);
    }
    
  catch (e) {
    alert(`Invalid input. ${e}`);
  }
}

