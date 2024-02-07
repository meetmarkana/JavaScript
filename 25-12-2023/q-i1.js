let symbole = [
    {
        symbole : '!' , value : 10
    },{
        symbole : '@' , value : 12
    },{
        symbole : '#' , value : 14
    },{
        symbole : '$' , value : 16
    },{
        symbole : '%' , value : 18
    },{
        symbole : '^' , value : 20
    },{
        symbole : '&' , value : 22
    },{
        symbole : '*' , value : 24
    }
]

for(let i in symbole){
    document.write("<h3>"+symbole[i].symbole+" : "+symbole[i].value+"</br></h3>")
}