Convert();

function showConverted(usd, eur) {
    alert(`${usd} USD - ${eur} EUR`);
}

function Convert() {
  let usd = prompt("USD: ");

  try {
    if (isNaN(usd)) {
      throw "Please enter a number.";
    }
      
    else if (usd <= 0) {
      throw "usd cannot be 0 or less than 0.";
    }
      const usd_to_eur = 0.98;
      var eur = parseInt(usd) * usd_to_eur;
      showConverted(usd, eur);
    }
    
  catch (e) {
    alert(`Invalid input. ${e}`);
  }
}

