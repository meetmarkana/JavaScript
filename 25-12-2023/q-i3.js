let characters = [
    {
        char : 'a' , num : 30
    },{
        char : 'b' , num : 31
    },{
        char : 'c' , num : 32
    },{
        char : 'd' , num : 33
    },{
        char : 'e' , num : 34
    },
    {
        char : 'f' , num : 35
    },
    {
        char : 'g' , num : 36
    }
]

for(let i in characters){
    document.write("<h3>"+characters[i].char+" - "+characters[i].num+"</br></h3>")
}