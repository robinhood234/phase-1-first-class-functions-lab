// Code your solution in this file!
//drivers = ['robin', 'patrick', 'Gidy Mane', 'Vera Obiera', 'mum'];
const returnFirstTwoDrivers = function (drivers) {
 return drivers.slice(0, 2);
};
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (integer) {
return function  (fare) {
return fare * integer;
}
}
const fareDoubler = createFareMultiplier (2);
//const doubleFare = fareDoubler (fare);

const fareTripler = createFareMultiplier (3);
//const fare = integer;
//const tripleFare = fareTripler (fare);

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
return returnFirstTwoDrivers (drivers);
}