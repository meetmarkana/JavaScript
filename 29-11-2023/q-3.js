let age = document.getElementById("age").value

if(age == ""){
    document.write("")
}
else{
    if(age >= 0 && age<=12){
        document.write("Price : $8")
    }else if(age >= 13 && age < 65){
        document.write("Price : $15")
    }else if(age >= 65){
        document.write("Price : $10")
    }
    else{
        document.write("SOmwthing Went Wrong !!!!")
    }




}