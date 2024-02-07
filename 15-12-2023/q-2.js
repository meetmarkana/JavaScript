function counter(){
    let c = 0
    return function(){
        return c++
    }
}
let ans = counter()

console.log(ans())
console.log(ans())
console.log(ans())

