let person = [
    {
        firstname : "Meet",lastname : "Markana" , age : 18
    },{
        firstname : "Ayan",lastname : "Sangani" , age : 21
    },{
        firstname : "Raj",lastname : "Manavadariya" , age : 22
    },{
        firstname : "Prem",lastname : "Gediya" , age : 19
    }
]

for(let i = 0 ; i < person.length ; i++){
    document.write("<h1> First Name :-"+person[i].firstname +"<br>"+"Last Name :- "+person[i].lastname +"<br>"+ "Age :- "+person[i].age + "</h1><br>")
}