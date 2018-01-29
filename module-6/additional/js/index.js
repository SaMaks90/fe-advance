// task one
/*  
  Расставьте отсутствующие this в методах 
  объекта day
*/

const day = {
    sunrise: "6:15",
    sunset: "20:45",
    getBreakpoints() {
      return `Sunrise: ${this.sunrise}, Sunset: ${this.sunset}`;
    },
    minutesToString(minutes) {
      return `${Math.trunc(minutes / 60)}:${minutes % 60}`;
    },
    toMinutes(str) {
      const tmp = str.split(":");
      return Math.trunc(+tmp[0]) * 60 + +tmp[1];
    },
    getLength() {
      return `Length of day: ${this.minutesToString(
        this.toMinutes(this.sunset) - this.toMinutes(this.sunrise)
      )}`;
    }
  };
  
  console.log(day.getBreakpoints()); // "Sunrise: 6:15, Sunset: 20:45"
  console.log(day.getLength()); // "Length of day: 14:30"
  
// task two
/*  
  Расставьте отсутствующие this в конструкторе объектов Day
*/

function Day(sunrise, sunset) {
    this.sunrise = sunrise;
    this.sunset = sunset;
    
    this.getBreakpoints = () => `Sunrise: ${sunrise}, Sunset: ${sunset}`;
    
    minutesToString = (minutes) => `${Math.trunc(minutes / 60)}:${minutes % 60}`;
    
    toMinutes = (str) => {
      const tmp = str.split(':');
      return Math.trunc(+tmp[0]) * 60 + +tmp[1];
    };
    
    this.getLength = () => `Length of day: ${minutesToString(
        toMinutes(sunset) - toMinutes(sunrise)
      )}`;
  };
  
  const day = new Day('6:15', '20:45');
  
  console.log(day.sunrise); // 6:15
  console.log(day.sunset); // 20:45
  console.log(day.getBreakpoints()); // "Sunrise: 6:15,  Sunset: 20:45" 
  console.log(day.getLength());  // "Length of day: 14:30"
  
// task three
/*  
  Расставьте отсутствующие .call 
*/

const getBreakpoints = function() {
    return `Sunrise: ${this.sunrise} Sunset: ${this.sunset}`;
  };
  
  const getLength = function() {
    
    const toMinutes = str => {
      const tmp = str.split(":");
      return Math.trunc(+tmp[0]) * 60 + +tmp[1];
    };
  
    const minutesToString = minutes => {
      return `${Math.trunc(minutes / 60)}:${minutes % 60}`;
    };
  
    return `Length of day: ${minutesToString(
      toMinutes(this.sunset) - toMinutes(this.sunrise)
    )}`;
  };
  
  function Day(sunrise, sunset) {
    this.sunrise = sunrise;
    this.sunset = sunset;
  }
  
  const today = new Day("6:15", "20:45");
  // .call
  console.log(getBreakpoints.call(today)); // "Sunrise: 6:15  Sunset: 20:45"
  
  function DaysLongitude(sunrise, sunset) {
    this.sunrise = sunrise;
    this.sunset = sunset;
  }
  
  const todaySunsDay = new DaysLongitude("6:15", "20:45");
  // call.
  console.log(getLength.call(todaySunsDay)); // "Length of day: 14:30"

// task four
/*  
  На основе предложенной функции сделайте 
  IIFE функцию с передачей аргументов ('5:15','20:45')
*/

const result = (function getLengthOfDay(sunrise, sunset) {
  
  const minutesToString = (minutes) => 
    `${Math.trunc(minutes / 60)}:${minutes % 60}`;
  
  const toMinutes = (str) => {
    const tmp = str.split(':');
    return Math.trunc(+tmp[0]) * 60 + +tmp[1];
  };
  
  return minutesToString(toMinutes(sunset) - toMinutes(sunrise));
})('5:15', '20:45');
console.log(result); // "15:30"