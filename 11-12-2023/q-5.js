let a = document.getElementById("in1").value
let p= 1
    
    function productofdigits(){
        while(a>0){
            p*=a%10
            a=parseInt(a/10)
            console.log(parseInt(p))
        }
    }
    productofdigits();