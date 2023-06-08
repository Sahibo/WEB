function Time(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }
  
  Time.prototype.displayTime = function() {
    const leadingZero = (num) => (num < 10 ? '0' + num : num);
    const formattedTime = leadingZero(this.hours) + ':' + leadingZero(this.minutes) + ':' + leadingZero(this.seconds);
    console.log('Time:', formattedTime);
  };
  
  Time.prototype.addSeconds = function(seconds) {
    const totalSeconds = this.toSeconds() + seconds;
    const newTime = new Time();
    newTime.setTime(totalSeconds);
    return newTime;
  };
  
  Time.prototype.addMinutes = function(minutes) {
    const totalMinutes = this.toMinutes() + minutes;
    const newTime = new Time();
    newTime.setTime(totalMinutes * 60);
    return newTime;
  };
  
  Time.prototype.addHours = function(hours) {
    const totalHours = this.hours + hours;
    const newTime = new Time();
    newTime.setTime(totalHours * 3600);
    return newTime;
  };
  
  Time.prototype.toSeconds = function() {
    return (this.hours * 3600) + (this.minutes * 60) + this.seconds;
  };
  
  Time.prototype.toMinutes = function() {
    return (this.hours * 60) + this.minutes + (this.seconds / 60);
  };
  
  Time.prototype.setTime = function(totalSeconds) {
    this.hours = Math.floor(totalSeconds / 3600) % 24;
    this.minutes = Math.floor((totalSeconds % 3600) / 60);
    this.seconds = totalSeconds % 60;
  };
  
  const time = new Time(20, 30, 45);
  time.displayTime(); 
  
  const addedSeconds = time.addSeconds(30);
  addedSeconds.displayTime(); 
  
  const addedMinutes = time.addMinutes(15);
  addedMinutes.displayTime();
  
  const addedHours = time.addHours(2);
  addedHours.displayTime();
  