const arrayMember1 = ['nun', 'ink', 'oat'];
const arrayMember2 = ['nun', 'tim' ];
const arrayMember3 = ['nun', 'inkna', 'oatkrub']

// ####Exercise 1
// ###Part 1
// Intersection Function

const intersection = (array1, array2) => {
    let result =  array1.filter(array => array2.includes(array));
    return result;
}

console.log(intersection(arrayMember1, arrayMember2));

// ### Part 2
// Get Word Length Function

const getWordLength = (wordArray) => {
    const lengthResult = wordArray.map(w => w.length);
    return lengthResult;
}
console.log(getWordLength(arrayMember1));
console.log(getWordLength(arrayMember2));
console.log(getWordLength(arrayMember3));


// #### Exercise 2
// Write a function that logs whether a number is between 0 and 25 (inclusive), between 26 and 100 (inclusive), greater than 100, or less than 0.

const numberRange = (number) => {
    if (number  >= 0 && number <= 25) {
        return  `${number} is betwwwn 0 and 25`
    }else if (number  >=26  && number <= 100) {
        return  `${number} is betwwwn 26 and 100`
    }else if (number  > 100) {
        return  `${number} is greater than 100`
    }else{
        return  `${number} is less than 0`
    }
}
console.log(numberRange(25))
console.log(numberRange(100))
console.log(numberRange(125))
console.log(numberRange(-25))

// ### Challenge
//Create function chopString ที่รับ argument เป็น str กับ numOfChar โดยผลลัพธ์ จะเป็น array ของ string ที่ถูกตัดเป็นจำนวน เท่ากับ numOfChar โดยไม่นับ เว้นวรรค (" ")
const test ="stay hungry, stay foolish"
// numOfChar=2 
// ['st','ay', 'hu', 'ng', 'ry', ',s', 'ta', 'yf', 'oo', 'li', 'sh']
const chopString = (str, numOfChar) => {
    const string = str.replaceAll(" ","") // remove space
    const rex = `.{1,${numOfChar}}` 
    const regex = new RegExp(rex, "g") // make a regx for cut sting by number
    return string.match(regex)// match string by regx

}

console.log(chopString(test,3))


