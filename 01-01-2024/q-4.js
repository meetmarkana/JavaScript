function chkDivision(num1,num2){
    if(num2 <= 0){
        throw new Error("Number not divisible by 0 or negative number")
    }else{
        console.log("Division = ",+num1 / +num2)
    }
}
try{
    chkDivision(0,10)
}catch(e){
    console.log("Error : ",e.message)
}