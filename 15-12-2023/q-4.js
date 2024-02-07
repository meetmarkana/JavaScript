function multiplier(factor){
    return function(number){
        return +factor * +number
    }
}
factor = document.getElementById("in1").value 
number = document.getElementById("in2").value 

console.log(multiplier(factor)(number))