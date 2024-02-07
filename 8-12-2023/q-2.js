let n = document.getElementById("in").value 

let first = 0
let second = 1
let nextnum;

if(n == 0){
    document.write("")
}else if(n  >=  1){
    for(let i = 0 ; i <= n ; i++){
        if(i <= 1){
            nextnum = i
        }else{
            nextnum = first+second
            first=second
            second= nextnum
        }
        document.write("<center><h1>",nextnum,"</h1></center>")
    }
}else{
    document.write("<center><h1>Invalid Input</h1></center>")
}