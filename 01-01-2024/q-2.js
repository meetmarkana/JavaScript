function chkEmptyString(string){
    if(string === ""){
        throw new Error("String must contain some characters")
    }else{
        console.log("Valid String ",string)
    }
}
try{
    chkEmptyString("")
}catch(e){
    console.log("Error : ",e.message)
}