function chkAge(age){
    if(age < 18){
        throw new Error("Not eligible for vote")
    }else if(age >= 18){
        console.log("Eligible for vote ")
    }
}
try{
    chkAge(19)
}catch(e){
    console.log("Error : ",e.message)
}