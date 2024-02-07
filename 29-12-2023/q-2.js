document.getElementById("submit").addEventListener("click",chkage)

function chkage(){
    var age = document.getElementById("age").value

    if(age === ""){
        document.write("")
    }else if(age == 0){
        document.getElementById('ans').innerHTML="Please Enter Valid Input!!"
    }else if(age == 18){
        document.getElementById('ans').innerHTML="You are just old enough to drive in India!"
    }else if(age >= 18){
        document.getElementById('ans').innerHTML="You can drive in India!"
    }else{
        document.getElementById('ans').innerHTML="You can't drive in India!"
    }
}