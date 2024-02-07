let arr = [1,2,3,4,5,6,7,8]

let ans = arr.filter((el)=>{
    return el % 2 == 0
})


let max = ans.reduce((el,a)=>{

return (el  > 0) ? (el > a) ? el : a : -1
})
console.log(ans)
console.log(max)
