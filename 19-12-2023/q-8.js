let words = ['mk','ksksk','sdewwww','wewew']

let lengthOfWords = words.map((el)=>{
    return el.length
})

let ans = lengthOfWords.filter((len)=>{
    return len % 2 != 0
})

console.log(ans)



