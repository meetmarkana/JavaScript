let guest = document.getElementById("in").value 


if(guest == ""){
    document.write("")
}else if(guest == 0 ){
    document.write("<center><h1>It seems like no one is attending the reception. Are you sure?</h1></center>")

}else if(guest == 1){
    document.write("<center><h1>Great! There is one guest attending the reception.</h1></center>")
}else if(guest == 2){
    document.write("<center><h1>Perfect! You and one other person will be attending the reception.</h1></center>")
}else if(guest >= 2){
    document.write("<center><h1> ",guest , "guests will be attending the reception.</h1></center>")
}else{
    document.write("<center><h1>InValid Input</h1></center>")
}

for(let i = 1 ; i <= guest ; i++){
    if(i === 3){
        continue;
    }   
    document.write("<center><h1>Thank you ,Guest Number ",i, " for attending the reception.</h1></center>")
    
}