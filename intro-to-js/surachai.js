function askMyName() {
   const name = prompt("Please enter your name");// เรียกใช้คำสั่ง prompt เพื่อถามชื่อ https://www.w3schools.com/jsref/met_win_prompt.asp

   if (name != null) {
      document.getElementById( "my-name1"/*"ใส่ id ของ h1 ในนี้"*/).innerHTML = "My name is " + name;
   }
}

function helloWorld() {
const h1message =  document.getElementById( "my-name1"/*"ใส่ id ของ h1 ในนี้"*/).innerHTML// ใช้คำสั่ง document.getElementById เหมือนใน askMyName เพื่อเอาข้อความใน h1 มาใส่
                  alert( h1message + 'สู้งาน สู้ชีวิต แต่ไม่คิดสู้เมีย' /*'ใส่คำคมหลังรถสิบล้อ'*/)
}
/*EX2 year of birht cal age.*/
function calAge() {
      const yearOfBirth = prompt('ใส่ปี ค.ศ. เกิดได้เลยจ้า');
      const currentlyAge = 2022 - Number(yearOfBirth);
      alert(`ยินดีด้วย นายอยู่ในประเทศนี้มา ${currentlyAge} ปีแล้ว`);
   }
/*EX3*/
function loadProfile() {
  myName = 'Surachai';
  myProvince = 'Bangkok';
  document.getElementById('my-name').innerHTML = myName; 
  document.getElementById('my-province').innerHTML = myProvince;
}


            
    
  



