calculateAge();

function calculateAge() {
  let birthYear = prompt("Enter the year of your birth: ");
  let currentYear = new Date().getFullYear();

  try {
    if (isNaN(birthYear)) {
      throw "Please enter a number.";
    }
    
    else if (birthYear > currentYear) {
      throw "Birth year cannot be in the future.";
    }

    var age = currentYear - parseInt(birthYear);
    showAge(age);

  } 
  catch (e) {
    alert(`Invalid input. ${e}`);
  }
}

function showAge(age) {
  alert(`Your age: ${age}`);
}