let a = document.getElementById("inp-1").value
let p;
    if(a == "")
    {
        document.getElementById("ans").innerText = ""
    }
    else
    {
        if( a == 'electronics')
        {
            
            document.getElementById("ans").innerText = "Electronics: 10% off for 2 or more items" 
        }
        else if( a == 'clothing')
        {
            
            document.getElementById("ans").innerText = "Clothing: Buy 1 get 1 50% off"
        }
        if( a == 'ongoing promotion')
        {
            
            document.getElementById("ans").innerText = "Additional discounts based on specific products or time-limited offers"
        }
    }