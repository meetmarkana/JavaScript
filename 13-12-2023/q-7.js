let k;
function pattern2(k){
    for(let i=4; i>=1; i--){
        let p=""
        for(let j=1; j<=i; j++){
            p+=k
            k++
        }
        console.log(p)
    }
}
pattern2(1)