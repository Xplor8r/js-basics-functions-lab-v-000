// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  let result;
    location > 42 ? result = location - 42: result =  42 - location;
  return result;
}

function distanceFromHqInFeet(location) {
  let feet = distanceFromHqInBlocks(location);
  let result = feet * 264;
  return result;
}

function distanceTravelledInFeet(start, destination) {
  let result;
    start > destination ? result = start - destination: result =  destination - start;
}

function calculatesFarePrice(start, destination) {
  
}