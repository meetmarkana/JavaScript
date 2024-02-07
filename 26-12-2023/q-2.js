let quotes = [
    {text:"Education is not preparation for life; education is life itself." , 
    author:"John Dewey" , 
    category:"education"},

    {text:"The only thing we have to fear is fear itself." , 
    author:"Franklin D. Roosevelt" , 
    category:"life"},

    {text:"If you can't outplay them, outwork them." , 
    author:"Ben Hogan." , 
    category:"education"},

    {text:"Love your family, work super hard, live your passion." , 
    author:"MK" , 
    category:"success"},

    {text:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking." , 
    author:"Steve Jobs" , 
    category:"success"},

    {text:"To live is the rarest thing in the world. Most people exist, that is all." , 
    author:"Oscar Wilde" , 
    category:"life"},
]


let Education = []

for(i in quotes){
    if(quotes[i].category === "education"){
        Education.push(quotes[i].text)
    }
}

console.log(Education)