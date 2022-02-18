function askMyName() {
    const name = prompt("Please enter your name");
    if (name != null) {
       document.getElementById("my-name").innerHTML = "My name is " + name;
    }
 }
 
 function helloWorld() {
    const h1message = document.getElementById("my-name").innerHTML
    alert(h1message + " อย่าไปหยอง เพราะเราไม่ใช่หมู")
 }

 function calAge() {
    let yearofBirth = prompt("Please enter your year of birth");
    yourAge = 2022 - Number(yearofBirth); 
    alert(`ยินดีด้วย, นายอยู่ในประเทศเก๊กฮวยนี้มา ${yourAge} ปีแล้ว`)
 }

 function loadProfile() {
   myName = "Julaluk" ;
   myProvince = "Khon Kaen" ;
   document.getElementById("fname").innerHTML = myName ;
   document.getElementById("my-province").innerHTML = myProvince;
}
