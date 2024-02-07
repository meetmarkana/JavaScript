function counter(){
    let c = 1
    
  return function(){
      return c++
    }
}

let ans = counter()

for(let i=1;i<=5;i++){
    console.log(ans())
}