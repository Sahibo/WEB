calculatePerimeter();

function showPerimeter(Perimeter) {
    alert(`P - ${Perimeter}`);
}

function calculatePerimeter() {
  let lenght = prompt("Enter a length of the side of the square: ");

  try {
    if (isNaN(lenght)) {
      throw "Please enter a number.";
    }
      
    else if (lenght < 0) {
      throw "Lenght cannot be less than 0.";
    }
  
      var Perimeter = parseInt(lenght) * 4;
      showPerimeter(Perimeter);
    }
    
  catch (e) {
    alert(`Invalid input. ${e}`);
  }
}

