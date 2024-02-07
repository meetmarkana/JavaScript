let salary= document.getElementById("inp-1").value
    let Price
    let finalprice

    if(salary == "")
    {
        document.getElementById("ans").innerText = ""
    }
    else
    {
        if(salary>0 && salary<=10000)
        {
            Price = (salary*5)/100;
            finalprice = salary - Price
            document.getElementById("ans").innerText = +finalprice
        }
        else if(salary>=10001 && salary<20000)
        {
            Price = (salary*10)/100;
            finalprice = salary - Price
            document.getElementById("ans").innerText = +finalprice
        }
        else if(salary>=20001 && salary<30000)
        {
            Price = (salary*15)/100;
            finalprice = salary - Price
            document.getElementById("ans").innerText = +finalprice
        }
        else if(salary>=30001 && salary<40000)
        {
            Price = (salary*20)/100;
            finalprice = salary - Price
            document.getElementById("ans").innerText = +finalprice
        }
        else
        {
            Price = (salary*25)/100;
            finalprice = salary - Price
            document.getElementById("ans").innerText = +finalprice
        }
    }