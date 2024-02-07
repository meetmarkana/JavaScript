let num = 10;
let f = 0
let s =1
let next
for(let i = 0; i <= num; i++){
    if(i <= 1){
        next = i
    }else{
        next = f+s
        f=s
        s= next
    }
    document.write("<center><h1>",next,"</h1></center>")
}