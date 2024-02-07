let a  = document.getElementById("in1").value 
let b  = document.getElementById("in2").value
let c  = document.getElementById("in3").value 
let sum = 0 
function sumOfThreeNum(){
    sum = +a + +b + +c
    console.log(parseInt(sum))
}
sumOfThreeNum()
