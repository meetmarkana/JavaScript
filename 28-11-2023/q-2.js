let age = document.getElementById("age").value
if(age=="")
{
    document.write("")
}
else{
    if(age < 18){
        document.write("Minor") 
    }
    else if(age < 65){
        document.write("Adult")
    }
    else{
        document.write("Senior")
    }
}