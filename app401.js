//Define function
const age = "Mark Zuckerberg";
function hello(fname,age,position) {
    console.log("Hello" , fname , age , position);
}
//Call function
let position = prompt("Enter position: ");//รับค่าจ่กเเป้นพิมพ์
document.getElementById("test").innerHTML = position;
hello(fname , 45 , position);
hello("Elon Musk",50,Leader)