<img align="right" width="150" height="150" src="https://media-exp1.licdn.com/dms/image/C4E0BAQF7BYCCZt5epw/company-logo_200_200/0?e=2159024400&v=beta&t=qUAFP9bUgBEEXGVQYpUXW1J_OiP8e0r4rFBpqp8OrxA">

# JS-03 Control Flow

 <br/>
 <br/>

Open up a text editor of your choice and complete the following Javascript exercises.

### Exercise #1

We'll build the industry plant calendar from the opening exercise.

#### Part 1
First, build a function called "businessHours". Similar to the day of the week class exercise, this function should accept two parameters: dayNumber and hourNumber.

By reading the dayNumber and the hourNumber, your program should print whether it is business hours or not. It should return true if it is business hours, and false if not.

```
function isBusinessHours(dayNumber, hourNumber) {

}

// 1 = Mon, 10 = 10am
isBusinessHours(1, 10) // true

// 5 = Fri, 19 = 7pm
isBusinessHours(5, 19) // false

// 6 = Sat, 13 = 1pm
isBusinessHours(6, 13) // false


// Challenge
isBusinessHours(3, 12) // false
isBusinessHours(3, 13) // true
```

Obs: consider business hours Mon-Fri 9am - 6pm. Use the 24-hour clock system (6pm = 18).
Challenge: consider hourNumber = 12-13 as on business hours

#### Part 2

Now, create the function getDayNumber.

It should accept two parameters: janFirstDayNumber and yearDayNumber.

The yearDayNumber will be an int ranging from 0 to 365.

janFirstDayNumber will be an int ranging from 0 to 6, representing the day of the week of January 1st.

Your function should then calculate and return the day of the week corresponding to the yearDayNumber passed.
```
function getDayNumber(janFirstDayNumber, yearDayNumber)
// janFirstDayNumber = วันในสัปดาห์ของวันที่ 1 มกรา เช่น จันทร์ อังคาร (0-6, 0 = วันอาทิตย์) yearDayNumber = วันใน 1 ปี (0 - 365)

// 01-01-2022 -> Saturday -> 6, วันที่ 1 Jan 2022 -> 0
getDayNumber(6, 0) // Saturday -> return 6

// 01-01-2022 -> Saturday -> 6, วันที่ 2 Jan 2022 -> 1
getDayNumber(6, 1) // Sunday -> return 0

// 01-01-2022 -> Saturday -> 6, วันที่ 10 Jan 2022 -> 9
getDayNumber(6, 9) // Monday -> return 1

// 01-01-2022 -> Saturday -> 6, วันที่ 31 Dec 2022 -> 364
getDayNumber(6, 364) // Saturday -> return 6
```
Hint: use the remainder operator (%), dividing your yearDayNumber by 7.

#### Part 3

Finally, build a function that, from a yearDayNumber (int, 0-365) and an hourNumber (int, 0-23), returns true if it is business hours.

```
function isBusinessHoursByYeayDay(janFirstDayNumber, yearDayNumber, hourNumber) {
  // getDayNumber(janFirstDayNumber, yearDayNumber)
  // isBusinessHours(_, hourNumber)
}

// 
```

### Challenge

Replace the yearDayNumber and hourNumber parameters with a Date() variable.

```
function isBusinessHoursByDateTime(datetime) {
  // getDayNumber(janFirstDayNumber, yearDayNumber)
  // isBusinessHours(_, hourNumber)
}
```

Hints: 

https://www.w3schools.com/jsref/jsref_gethours.asp

https://www.w3schools.com/jsref/jsref_getday.asp