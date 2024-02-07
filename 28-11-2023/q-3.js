let num = document.getElementById("num").value
if(num=="")
{
    document.write("")
}
else{
    if(num > 0){
        document.write("Positive") 
    }
    else if(num < 0){
        document.write("Negative")
    }
    else{
        document.write("zero")
    }
}