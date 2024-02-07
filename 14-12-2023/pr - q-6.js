let fact = 1

let factorial = function(num){
    for(i = 1 ; i <= num ; i++){
        fact *= i

    }
    return "Factorial of a NUmber "+num+ " ="+" "+parseInt(fact)
}

num = document.getElementById("in").value 
console.log(factorial(num))