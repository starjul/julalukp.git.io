// Exercise1
function paymentCal(cost){
  const transactionFee = 3;
  const interestFee = cost *(0.001) ;
  return cost + transactionFee + interestFee
}
console.log(paymentCal(1000))
  
// Exercise2
 //Path1
 const greetingFriends = (name1, name2, name3) => {
  return `Wellcome ${name1} ${name2} ${name3}`
} 
console.log(greetingFriends("p","Jo","Ci"));

//Path2
// #### Part 2
// Ed would like to create a function that takes in a birth year and returns the age.
// i.e. 1990 returns 30

const calAge = (birthYear) => {
  const mybirthYear = Number(birthYear);
  const currentYear = new Date().getFullYear();
   age = currentYear - mybirthYear;
  return age;
}
console.log(calAge("1997"));

// Path3
// Ed would like to create a function that prints out,
// `Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.`

const wellcomeFunction = (name1, age1, name2, age2, name3, age3) => {
  return `Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`
}

console.log(wellcomeFunction("AA", 12, "Pa", 14, "QQ", 13))

// ### Challenge Yourself
// A teacher wants to create a rubric for grading. The rubric is from 0 - 11.

// #### Part 1
// A student passes if they have a score greater than or equal to 5. Create a function that returns a boolean true or false. 

// #### Part 2
// A student has an excellent grade if they score higher than 8.
// Add on to your function to print out "Excellent" for scores greater than 8.

// #### Part 3
// A student has a perfect grade if their score is 11.
// Add on to your function to print out "Perfect" for a score of 11.
const isPass = (point) => {
  point = Number(point);
  if (point > 11 || point < 0) {
    return "oop somethink wrong"
  }
  else if(point < 5){
    return "False"
  }
  else if(point == 11){
    return "Perfect"
  }
  else if(point >= 8){
    return "Excellent"
  }
  else {
  return "true"
}}

console.log(isPass(5))