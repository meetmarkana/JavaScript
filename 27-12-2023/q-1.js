let library = [
    {title:"The Blue Umbrella",
     author:"Ruskin Bond",
     year:1974
     },

     {title:"Wings Of Fire",
     author:"A.P.J. Abdul Kalam",
     year:1999
     },

     {title:"God Of Small Things",
     author:"Roy Arundhati",
     year:2000
     },

     {title:"Train To Pakistan",
     author:"Singh Khushwant",
     year:1956
     },

     {title:"Harry Potter and the Philosopher's Stone",
     author:"J.K. Rowling",
     year:1997
     },
]

function books(library,year){
    let books = library.filter(book => book.year<year)
    let title = books.map(book => book.title)

    return title;
}

let ans = books(library,2000)
console.log(ans)
