let score = document.getElementById("sc").value

if(score == ""){
    document.write("")
}
else{
    if(score >= 90 && score<=100){
        document.write("Grade A")
    }else if(score >= 80 && score < 90){
        document.write("Grade B")
    }else if(score >= 70 && score < 80){
        document.write("Grade C")
    }else if(score >= 60 && score < 70){
        document.write("Grade D")
    }else if(score >= 0 && score < 60){
        document.write("Grade F")
    }
    else{
        document.write("SOmwthing Went Wrong !!!!")
    }
}