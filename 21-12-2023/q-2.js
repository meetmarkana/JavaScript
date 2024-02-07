let arr = [1,2,3,4,5,6]

let even = arr.filter((el)=>{
    return el % 2 == 0
})

let sq = even.map((el)=>{
    return el * el
})
console.log(even)
let sum = sq.reduce((el,acc)=>{
    return acc + el
},0)


console.log(sum)