// Exercise #1
// Part 1
// There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.

const queues = ["Sofia", "David", "Juan"];
console.log(queues);
// Part 2
// Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?
const addClients = queues.push("Sara", "Augustin");
console.log(queues);

const tellerCalling = queues.shift();
console.log(queues);

// queues.pop()
// Part 3
// It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like?

queues.splice(1, 0, "Renata");
console.log("After Renata came, the queue seem like:", queues);

const addClient = queues.push("Elena");
console.log(queues);

// ###Exercise2
// Write a JavaScript program to construct the following pattern, using a nested for loop.

// ```
// *
// * *
// * * *
// * * * *
// * * * * *
// ```

let count = 0;
for (let number = 0; number <= 4; number++) {
  let star = "";
  for (let num = 4 - number; num <= 4; num++) {
    star += "*";
  }
  console.log(star);
}

// let count = 0;
// for (let number = 0; number <= 5; number++) {
//   let star = "";
//   for (let num = 0 + number; num >= 0; num--) {
//     star += "*";
//   }
//   console.log(star);
// }

// วิธีของเฮียง
// let count = 0;
// for (let number = 0; number <= 4; number++) {
//     let star = "";
//     for (let num = 0; num <= number; num++) {
//       star += "*";
//     }
//     console.log(star); }

// ###Exercise3
// Write while loops to do the following:

// – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,as long as xValue remains positive.

let xValue = 10;
while (xValue > 0) {
  xValue = xValue - 0.5;
  console.log(xValue);
}

// - Print all the odd numbers between 1 - 100
let oddNumber = 0 ;
while (oddNumber < 100){
    oddNumber++
    let odd = oddNumber % 2 !== 0
    if (oddNumber % 2 !== 0){
      console.log("Current number:", oddNumber) 
    }
}

// Write a function with a while loop to print 1 through n in square brackets. 
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]

const printNBrackets = (n) => {
    let i =0;
    let print = '';
    while (i < n){
        i++
        print += `[${i}]`
    }
    console.log(print)
}
printNBrackets(6)

// Write a function with a while loop that computes the sum of first n positive integers: 
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190

const sumPositive = (y) => {
  let x = 0;
  let sum = 0;
  while (x < y){
      x++
      sum = sum + x
  }
  return sum;
}
console.log(sumPositive(5))
console.log(sumPositive(19))


// ### Challenge
// Write function to verify whether given text is palindrome
// 
// For example, 
// - if given text is 'tenet' then the function will return **true**
// - if given text is 'natnuntan' then the function will return **true**
// - if given text is 'prayath' then the function will return **false**

const isPalindrome = (text) => {
    let textSplit = text.split('');
    // let reverseTextsplit = textSplit.reverse()
    // let reverseText = reverseTextsplit.join('') 
    let reverseText = textSplit.reverse().join('')   
    
    let a =0;
    while(a < textSplit.length){
        a++
        if (text == reverseText) {
                return "true"
            } else{
                return "false"
    }
}
}
console.log(isPalindrome('jell'))
console.log(isPalindrome('tenet'))
console.log(isPalindrome('natnuntan'))
console.log(isPalindrome('prayath'))




