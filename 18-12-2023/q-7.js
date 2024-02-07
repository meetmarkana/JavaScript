let numbers = [10,20,30,40,50]
for(i = 0 ; i < numbers.length ; i++){
    if(i == 2){
        numbers.splice(2,1)
    }
}
console.log(numbers)