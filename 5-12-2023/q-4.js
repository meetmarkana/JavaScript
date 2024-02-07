let currency = document.getElementById("in1").value 

if(currency == ""){
    document.write("")
}else if(currency > 0 ){
    currency = currency *  83.371488
    document.write("<center><h1>",currency,"</h1></center>")
}