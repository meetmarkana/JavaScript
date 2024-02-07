var totalunits = prompt("Enter the number of units consumed:");

if(totalunits == ""){
    document.getElementById("ans").innerText =""
}else{
    if(totalunits <=100){
        let totalbill = totalunits * 1
    }else if(totalunits > 100 && totalunits <-200){
        totalbill = totalunits * 2 - 100
    }else{
        totalbill = totalunits * 3 - 300
    }
}
document.getElementById("ans").innerText = "Total Bill = $" + totalbill
