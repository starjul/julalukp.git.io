// For loop
// While loop

// do print no 10 times
// while number less than 10, then print it (increase number 1 every iteration)
let number = 0;
while (number < 10) {
  console.log(number)
  number = number + 1
  // console.log('current number', number)
  // number += 1
  // if (number === 5) break;
  // console.log('new number', number)
  // console.log('--------------')
  // // number++;
  // // number--;
}

console.log("....................................")
// จาก 9 - 0

let num = 9;
while (num >= 0) {
  console.log(num)
  num = num - 1;
}

console.log("....................................")

// for every number that (start from 0, and less than 10) then print it, after that increase number 1 every iteration
for (let no = 0 ; no < 10 ; no++ )

  console.log("Current No.:", no)

// console.log(0)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
console.log("....................................")
// for loop 9-0
for (let n = 9 ; n >= 0  ; n-- )

  console.log("Current No.:", n)

console.log("....................................")
// print เลขคู่ 0-20
for (let evenNumber = 0 ; evenNumber <= 20 ; evenNumber++){
  let even = evenNumber % 2 == 0
  if (evenNumber % 2 == 0){
    console.log("Current number:", evenNumber) 
  }

}
console.log("....................................")
// Nested Loop (ลูปซ้อนลูป)
// nu และ nb เท่ากับ number 
// ให้แสดงผล
// ****
// ***
// **
// *

let count = 0
for (let nb = 0 ; nb <= 3 ; nb++){
  let star = '';
  for (let  nu = 3 - nb ; nu >= 0 ; nu--){
    star += "*"
  }
  console.log(star)
}

console.log("....................................")

// Array

const queue =["ลูกน้ำ", "นนท์"]
console.log(queue[0]);
console.log(queue[1]);
queue[3] = "นัน"
console.log(queue.length)

// จากหน้าไปหลัง
for(let index = 0; index < queue.length ; index++){
    console.log(queue[index])
    console.log(queue[queue.length -1])
}
// for(let index = 0; index < ----queue.length----ตรงนี้จะใส่ความยาวของอาร์เรย์เลยก็ได้ แต่ในกรณีที่เราไม่ทราบความยาวของอาร์เรย์เราสามารถเขียนชื่ออาร์เรย์แล้วตวามด้วย.lengthได้ ; index++)

console.log(queue[queue.length -1])  //การprint สมาชิกตัวสุดท้ายของ Array

console.log("....................................")

// ถอยจากหลังไปหน้า
for(let idx = queue.length - 1; idx >= 0 ; idx--){
    console.log(queue[idx])
}


console.log("....................................")

// .push ยัดของไปที่ตำแหน่งสุดท้าย

console.log(queue)
// length = 4 (Add last item => queue[4]="")
queue.push('เบ๊บ') // ===> queue[queue.length] = "เบ๊บ"
console.log('After Push:', queue)

console.log("....................................")

// .pop ดึงของตัวสุดท้ายออกมา
console.log(".pop ===> ดึงตัวสุดท้ายออกไป")

const lastPerson = queue.pop();
console.log('Last Person', lastPerson)
console.log("After Pop",queue)

console.log("....................................")

// splice แทรกของเข้าไปในArray

//queue.splice(index ของตำแหน่งที่จะไปแทรก, จำนวนของ element ที่จะถูก replace, ของที่จะเอาไปแทรก--ซึ่งสามารถแทรกได้เรื่อยๆจนถึงอินฟินิตี้)

queue.splice(1, 0, lastPerson)  
console.log('After Splice 1', queue)

queue.splice(0, 1, "ชมพู")
console.log('After Splice 1', queue)

queue.splice(1, 2, "เอ็ก")
console.log('After Splice 1', queue)

console.log("....................................")
// เอาชื่อตัวเองและเพื่อนๆ ไปแทนที่ทุกคนใน exQueue
const exQueues = ['ชมพู','นัน', 'นนท์']
exQueues.splice(0, 1, "Jell")  
console.log('After Splice 1:', exQueues)

exQueues.splice(1, 1, "Som")  
console.log('After Splice 2:', exQueues)

exQueues.splice(2, 1, "Tee")  
console.log('After Splice 3:', exQueues)


console.log("....................................")
// Challence
const students = [
    ['เต้', 'โจน', 'ปิง'],
    ['ภัค', 'ป่าน', 'เบ๊บ']
  ]
  
  // students[0] // ['เต้', 'โจน', 'ปิง']
  
  
  // เต้โจนปิง
  // ภัคป่านเบ๊บ

console.log("....................................")

// forEach ปริ้นสมาชิกในอาร์เรย์ออกมาทีละตัว เป็น Read only mode

const learners = ['sompoo', 'cake', 'non']
learners.forEach (
    (learner) => {
        console.log(learner, 'is genous')
    }
    
)

console.log("....................................")

// .Map การสร้างอาร์เรย์ใหม่จากอาร์เรย์เดิม

const barcodes = ['0001', '0002', '0003'];

const newBarcode = barcodes.map(
    barcodes => {
        return "New" + barcodes;
    }
)
console.log('New barcode:', newBarcode)

// Exercise

const genthLearners = ['หว้า',' จี้', 'เค้ก'];

const newGenth = genthLearners.map(
    newGenth =>{
        return newGenth + " JSD#1"
    }
)
console.log(newGenth)

