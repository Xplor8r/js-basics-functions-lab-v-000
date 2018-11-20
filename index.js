// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  let result;
    location > 42 ? result = location - 42: result =  42 - location;
  return result;
}

function distanceFromHqInFeet(location) {
 let toFeet = location * 8;
 return distanceFromHqInBlocks(toFeet);
}

function distanceTravelledInFeet() {
  
}

function calculatesFarePrice(start, destination) {
  
}