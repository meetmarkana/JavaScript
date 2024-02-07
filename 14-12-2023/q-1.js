var isEven = function(num){
    if(num == 0){
        console.log("Number is Zero")    
    }else if(num <= 0){
        console.log("Number is Negative So Please , Enter a correct Number !!")
    }else if(num % 2 == 0){
        console.log("Number is Even")
    }else{
        console.log("Number is odd")
    }
}
let num = document.getElementById("in").value 
isEven(num)