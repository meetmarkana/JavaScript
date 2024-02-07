let a  = 1
if(a == ""){
    console.log("")
}
else if(a > 20){
    document.write("<center><h1>Please Enter Valid Input</h1></center>")
}else{ 
do{
    if(a % 2 == 0)
    document.write("<center><h1>",a,"</h1></center>")
    a++
}while(a<=20)
}