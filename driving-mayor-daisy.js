/*
Driving Mayor Daisy
Adrian To
22/12/2021

Complete the logic in the function carPassing.

The function, carPassing(cars, speed), takes in an array 
of car objects, and the speed of a car as it passes the sensor.

This function should create a new object with a property called 
speed, and another property called time and add it to the cars 
array. We can retrieve the current time, for setting the time 
property, by using the Date.now() function, which is built 
into JavaScript!
*/

const carsPassing = function(cars, speed) {
  let newCar = {
    speed: speed,
    time: Date.now()
  }
  cars.push(newCar);
  return cars;
}