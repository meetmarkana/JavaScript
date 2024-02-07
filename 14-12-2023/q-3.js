let greetUser = function(name,greeting = "Hello"){
    return greeting +" "+ name
}
let name = document.getElementById("in").value 
console.log(greetUser(name))