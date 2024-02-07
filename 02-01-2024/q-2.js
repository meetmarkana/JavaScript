document.getElementById("LoginForm").onsubmit=function (event){
    try{
        var uname = document.getElementById("name").value 
        var pwd = document.getElementById("pwd").value 

        if(!/\d/.test(uname)&&!/([A-Z]w+)/.test(uname)){
            throw new Error("Invalid Name!!")
        }

    }catch(error){
        event.preventDefault()
        document.getElementById("ans").innerHTML=error.message
    }
}

