let numPurchases = document.getElementById("in1").value 
let totalSpending = document.getElementById("in2").value 

if(numPurchases == "" && totalSpending == ""){
    document.write("")
}else if(numPurchases >=3 && totalSpending >=100){
    document.write("<center><h1>Congratulations! You are eligible for a special offer.</h1></center>")
}else{
    document.write("<center><h1>Sorry! You are Not eligible for a special offer.</h1></center>")
}