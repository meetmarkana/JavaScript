function add(a){
    return function(b){
        return +a + +b
    }
}

a = document.getElementById("in1").value 
b = document.getElementById("in2").value 

console.log(add(a)(b))