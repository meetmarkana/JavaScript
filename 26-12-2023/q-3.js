let books = [
    {title:"The Blue Umbrella",
     author:"Ruskin Bond",
     price:55,
     quantityAvailable:3},

     {title:"Wings Of Fire",
     author:"A.P.J. Abdul Kalam",
     price:375,
     quantityAvailable:9},

     {title:"God Of Small Things",
     author:"Roy Arundhati",
     price:302,
     quantityAvailable:2},

     {title:"Train To Pakistan",
     author:"Singh Khushwant",
     price:50,
     quantityAvailable:1},

     {title:"Harry Potter and the Philosopher's Stone",
     author:"J.K. Rowling",
     price:50,
     quantityAvailable:0},
]

let arrayOfBooks = []

for(i in books){
    if(books[i].price <= 60 && books[i].quantityAvailable > 0){
        arrayOfBooks.push(books[i].title)
    }
}

console.log(arrayOfBooks)