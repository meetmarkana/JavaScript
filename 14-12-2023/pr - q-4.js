let a = document.getElementById("in1").value 
let b = document.getElementById("in2").value 

function divide(a,b){
    if(a <= 0 || b <= 0){
        return "Cannot divide by 0 or nagative"
    }else{
        return +a / +b
    }
}
console.log(divide(a,b))