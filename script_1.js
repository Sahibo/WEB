const car = {
    
    make: "Toyota",
    model: "Camry",
    year: 2021,
    averageSpeed: 60,
  
    displayInfo: function() 
    {
      console.log(`Make: ${this.make}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log(`Average Speed: ${this.averageSpeed} km/h`);
    },
  
    calculateTravelTime: function(distance) 
    {
      const travelTime = distance / this.averageSpeed;
      const hours = Math.floor(travelTime);
      const minutes = Math.round((travelTime - hours) * 60);
      
      console.log(`Estimated travel time: ${hours} h. and ${minutes} min..`);
    }
  };
  
  car.displayInfo();
  car.calculateTravelTime(200);
  