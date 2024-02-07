let numbers = [
    {
        num : 1 , mapped : 10
    },{
        num : 2 , mapped : 11
    },{
        num : 3 , mapped : 12
    },{
        num : 4 , mapped : 13
    },{
        num : 5 , mapped : 14
    }
]

for(let i in numbers){
    document.write("<h3>"+numbers[i].num+" - "+numbers[i].mapped+"</br></h3>")
}