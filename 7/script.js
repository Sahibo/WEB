
calculateCapacity();

function showResult(result) {
    alert(`${result} times`);
}

function calculateCapacity() {
    var capacityGB = parseInt(prompt("Enter the capacity of the USB flash drive (in GB):"));

  try {
    if (isNaN(capacityGB)) {
      throw "Please enter a number.";
    }
      
    else if (capacityGB <= 0) {
      throw "capacity cannot be less than 0.";
    }
      var CapacityMB  = capacityGB * 1024;
      var fileCapacityMB = 820;
      var result = Math.floor(CapacityMB / fileCapacityMB);

      showResult(result);
    }
    
  catch (e) {
    alert(`Invalid input. ${e}`);
  }
}

