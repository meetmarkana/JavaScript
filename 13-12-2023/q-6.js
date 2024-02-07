let k;
function pattern1(k){
    for(let i=1; i<=4; i++){
        let p=""
        for(let j=1; j<=i; j++){
            p+=k
            k++
        }
        console.log(p)
    }
}
pattern1(1)