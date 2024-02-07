let a = document.getElementById("in").value 
let sum = 0
let one , two , three
function sumOfDigits(){
    one = a / 100
    two = (a % 100) / 10
    three = (a % 100 ) % 10
    sum = one + two + three
    console.log(parseInt(sum))
}
sumOfDigits()