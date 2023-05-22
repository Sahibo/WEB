calculateSpeed();

function showSpeed(Speed) {
    alert(`${Speed} km/h`);
}

function calculateSpeed() {
  let distance = prompt("Enter the distance between the cities (in kilometers): ");
  let time = prompt("Enter the time you want to reach the destination (in hours): ");

  try {
    if (isNaN(distance)) {
      throw "Incorrect distance. Please enter a number.";
    }

    else if (isNaN(time)) {
        throw "Incorrect time. Please enter a number.";
    }
    
    else if (distance <= 0) {
        throw "Distance cannot be 0 or less than 0.";
      }

    else if (time <= 0) {
      throw "Time cannot be 0 or less than 0.";
    }

      var speed = distance / time;
      speed = speed.toFixed(2);
      showSpeed(speed);
    }
    
  catch (e) {
    alert(`Invalid input. ${e}`);
  }
}

