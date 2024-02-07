let day = document.getElementById("in").value 
if(day == ""){
    document.write("")
}
else{
    switch(parseInt(day)){
        case 1 : document.write("<center>Sunday</center>")
        break
    
        case 2 : document.write("<center>Monday</center>")
        break
    
        case 3 : document.write("<center>Tuesday</center>")
        break
    
        case 4 : document.write("<center>Wednesday</center>")
        break
    
        case 5 : document.write("<center>Thursday</center>")
        break
    
        case 6 : document.write("<center>Friday</center>")
        break
    
        case 7 : document.write("<center>Saturday</center>")
        break
    
        default : console.log("Invalid Input")
    }
}
