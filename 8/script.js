calculate();

function showResult(numChocolateBars, remainingChange) {
    alert("You can buy " + numChocolateBars + " chocolate bars.\nYour remaining change will be " + remainingChange + ".");
}

function calculate() {
    var walletAmount = prompt("Enter the amount of money in your wallet: ");
    var chocolatePrice = prompt("Enter the price of one chocolate bar: ");

  try {
    if (isNaN(walletAmount || chocolatePrice)) {
      throw "Please enter a number.";
    }
      
    else if (walletAmount < 0) {
      throw "Wallet amount cannot be less than 0.";
    }

    else if (chocolatePrice <= 0) {
        throw "Price of chocolate cannot be 0 or less than 0.";
    }
  
    var numChocolateBars = walletAmount / chocolatePrice;
    var remainingChange = walletAmount % chocolatePrice;

    showResult(numChocolateBars, remainingChange);
  }
    
  catch (e) {
    alert(`Invalid input. ${e}`);
  }
}

