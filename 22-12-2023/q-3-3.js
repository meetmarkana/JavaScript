let str = document.getElementById("in").value 
let ans = []
for(let i=0 ; i < str.length ; i++){
    if(str[i] >= 'a' && str[i] <= 'z'){
      ans = parseInt(str.charAt(i))
    }else if(str.charAt(i) >= 'A' && str.charAt(i) <= 'Z'){
     ans = str.charAt(i)+=32
    }else{
        console.log("Something Went Wrong !!")
    }
}


console.log(ans)