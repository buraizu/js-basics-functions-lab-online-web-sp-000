// Code your solution in this file!
function distanceFromHqInBlocks (street) {
  if (street < 42) {
    return 42 - street
  } else {
    return street - 42
  }
}

function distanceFromHqInFeet(street) {
  if (street < 42) {
    return (42 - street) * 264
  } else {
    return (street - 42) * 264
  }
}

function distanceTravelledInFeet(startBlock, endBlock) {
  if (startBlock < endBlock) {
    return (endBlock - startBlock) * 264
  } else {
    return (startBlock - endBlock) * 264
  }
}

function calculatesFarePrice(start, destination) {
  billableFeet = distanceTravelledInFeet(start, destination)
  if (billableFeet < 400) {
    return 0;
  } else if (billableFeet > 400 && billableFeet < 2000) {
    return (billableFeet - 400) * .02
  } else if (billableFeet > 2000 && billableFeet < 2500) {
    return 25
  } else {
    return "cannot travel that far"
  }
}

// calculatesFarePrice: Given the same starting and ending block as
// the previous test (hint hint), return the fare for the customer.
// The first four hundred feet are free. For a distance between 400 and 2000 feet,
// the price is 2 cents per foot (not including 400, which are free!).
// Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet.
// Finally, Scuber does not allow any rides over 2500 feet - the function returns
// 'cannot travel that far' if a ride over 2500 feet is requested.

// 264 Ft. in Block
