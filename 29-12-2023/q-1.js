let first = document.getElementById("v1").value 
let second = document.getElementById("v2").value 
let third = document.getElementById("v3").value 
let fourth = document.getElementById("v4").value

function add(){
 let addition = +first + +second + +third + +fourth
 document.getElementById("ans").innerHTML = "Addition of Four Numbers = "+addition
}
function sub(){
let substraction = +first - +second - +third - +fourth
document.getElementById("ans").innerHTML = "Substraction of Four NUmbers = "+substraction
}
function div(){
let division1 = +first / +second
document.getElementById('ans').innerHTML = "Division of first two Numbers : "+division1
let division2 = +third / +fourth
document.getElementById('ans').innerHTML = "Division of first two Numbers : "+division2
}
function mul(){
    let multiplication = +first * +second * +third * +fourth

    document.getElementById("ans").innerHTML = "Multiplication of four numbers = "+multiplication
}