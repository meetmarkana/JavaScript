let array =  ['lion', 'tiger', 'elephant']

let newarray = ['giraffe' , 'zebra']

for(i = 0 ; i < newarray.length ; i++){
    array.unshift(newarray[i])
}
console.log(array)