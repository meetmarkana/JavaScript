let year = document.getElementById("y").value
if(year=="")
{
    document.write("")
}
else if(year % 2 == 0){
    document.write("Leap Year") 
}
else{
    document.write("Not a Leap Year")    
}