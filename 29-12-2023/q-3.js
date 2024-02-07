let firstname = "Meet"
let lastname = "Markana"
let fullname = firstname + lastname

function setFirstName(){
   document.getElementById("firstname").innerText=firstname
}     
 
    
function setLastName() {
    document.getElementById('lastname').innerHTML = lastname    
}
 
      
 
function setFullName() {    
    document.getElementById('fullname').innerHTML = fullname 
}
 
      
 
 
function resetDefaults(){
    firstname = document.getElementById("firstname").innerHTML=""  
    lastnamestname = document.getElementById("lastname").innerHTML=""
    fullname = document.getElementById("fullname").innerHTML=""  
 
}
  