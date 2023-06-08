  function Fraction(numerator, denominator) 
  {
    this.numerator = numerator;
    this.denominator = denominator;
  }
  
  Fraction.prototype.add = function(fraction) 
  {
    const commonDenominator = this.denominator * fraction.denominator;
    const newNumerator = (this.numerator * fraction.denominator) + (fraction.numerator * this.denominator);
    return new Fraction(newNumerator, commonDenominator).reduce();
  };
  
  Fraction.prototype.subtract = function(fraction) 
  {
    const commonDenominator = this.denominator * fraction.denominator;
    const newNumerator = (this.numerator * fraction.denominator) - (fraction.numerator * this.denominator);
    return new Fraction(newNumerator, commonDenominator).reduce();
  };
  
  Fraction.prototype.multiply = function(fraction) 
  {
    const newNumerator = this.numerator * fraction.numerator;
    const newDenominator = this.denominator * fraction.denominator;
    return new Fraction(newNumerator, newDenominator).reduce();
  };
  
  Fraction.prototype.divide = function(fraction) 
  {
    const newNumerator = this.numerator * fraction.denominator;
    const newDenominator = this.denominator * fraction.numerator;
    return new Fraction(newNumerator, newDenominator).reduce();
  }; 
  
  Fraction.prototype.reduce = function() 
  {
    const gcd = (num1, num2) => (num2 === 0 ? num1 : gcd(num2, num1 % num2));
    const divisor = gcd(this.numerator, this.denominator);
    return new Fraction(this.numerator / divisor, this.denominator / divisor);
  };
  
  const fraction1 = new Fraction(2, 4);
  const fraction2 = new Fraction(10, 11);
  
  const sum = fraction1.add(fraction2);
  console.log('Sum:', sum.numerator + '/' + sum.denominator);
  
  const difference = fraction1.subtract(fraction2);
  console.log('Difference:', difference.numerator + '/' + difference.denominator);
  
  const product = fraction1.multiply(fraction2);
  console.log('Product:', product.numerator + '/' + product.denominator);
  
  const quotient = fraction1.divide(fraction2);
  console.log('Quotient:', quotient.numerator + '/' + quotient.denominator);
  