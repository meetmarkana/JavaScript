document.getElementById("RegistrationForm").onsubmit=function (event){
    try{
        var uname = document.getElementById("name").value 
        var email = document.getElementById("email").value 
        var pnum = document.getElementById("phnum").value 
        var pwd = document.getElementById("pwd").value 
        var cpwd = document.getElementById("cfmpwd").value 

        if(/\d/.test(uname)){
            throw new Error("Invalid Name!!")
        }
        if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
            throw new Error("Invalid Email!!")
        }
        if(!/^\d{10}$/.test(pnum)){
            throw new Error("Invalid Phone NUmber")
        }
        if(pwd != cpwd){
            throw new Error("Confirm Password is Not Matching!!")
        }

    }catch(error){
        event.preventDefault()
        document.getElementById("ans").innerHTML=error.message
    }
}

