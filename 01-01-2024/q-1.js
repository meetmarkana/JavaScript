function chkEmail(email){
    if(!email.includes("@")){
        throw new Error("Email should have '@'")
    }else{
        console.log("Valid Email ",email)
    }
}
try{
    chkEmail("meetemail.com")
}catch(e){
    console.log("Error : ",e.message)
}