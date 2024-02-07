let num = document.getElementById("in").value 
let fact  = 1

function factorial(){
    if(num<=1){
        console.log("1")
    }
    else{
        for(let i = 1; i <= num; i++){
            fact = fact *= i
        }
        console.log(parseInt(fact))
    }
}
factorial()