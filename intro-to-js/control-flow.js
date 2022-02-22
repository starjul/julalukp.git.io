// Exercise1
// ###path1

function isBusinessHours(dayNumber, hourNumber) {
  dayNumber = Number(dayNumber);
  hourNumber = Number(hourNumber);
  let isTrue;

  if (
    dayNumber >= 1 &&
    dayNumber < 6 &&
    hourNumber >= 9 &&
    hourNumber <= 18 &&
    hourNumber != 12 &&
    hourNumber != 13
  ) {
    isTrue = "True";
  } else {
    isTrue = "False";
  }
  console.log(`IS it business hours? ${isTrue}`);
}

isBusinessHours(0, 16);
isBusinessHours(1, 9);
isBusinessHours(2, 12);
isBusinessHours(4, 13);
isBusinessHours(5, 18);

// ###Path2

function getDayNumber(janFirstDayNumber, yearDayNumber) {
  janFirstDayNumber = Number(janFirstDayNumber);
  yearDayNumber = Number(yearDayNumber);
  let dayofWeek = (janFirstDayNumber + yearDayNumber) % 7;
  console.log(`Day of week = ${dayofWeek}`);
}

getDayNumber(6, 0);
getDayNumber(6, 9);
getDayNumber(6, 1);
getDayNumber(6, 364);

// ###Path3
function isBusinessHoursByYeayDay(janFirstDayNumber,yearDayNumber,hourNumber) {
  janFirstDayNumber = Number(janFirstDayNumber);
  yearDayNumber = Number(yearDayNumber);
  let dayofWeek = (janFirstDayNumber + yearDayNumber) % 7;
  let isitBusinessHoursByYeayDay = isBusinessHours(dayofWeek,hourNumber);
  return isBusinessHours;
}
console.log(isBusinessHoursByYeayDay(0,9,14))
console.log(isBusinessHoursByYeayDay(0,9,13))

// ###Challenge

function isBusinessHoursByDateTime(datetime) {
    const dateTime = new Date();
    console.log(dateTime)
    let getDay = dateTime.getDay();
    let getHours = dateTime.getHours();
    let  isitBusinessHoursByDateTime = isBusinessHours(getDay,getHours);
    return isBusinessHours;
}

console.log(isBusinessHoursByDateTime());
