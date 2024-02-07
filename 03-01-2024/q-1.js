$(document).ready(function(){
    isValid=true;
    if(isValid = true){
      $("#signup").submit(function(e){
         var name = $("#nm").val()
         if(name===""){
             isValid=false;
             alert("Enter your name")
         }
      var email=$("#eml").val()
      if(email===""){
         isValid=false;
         alert("Enter email address")
      }else if(!email.endsWith("@gmail.com")){
         isValid=false;
         alert("Entering @gmail.com compalsary")  
      }
      var mobile=$("#numb").val()
      var phnrgx=/^\d{10}$/
      if(mobile==="" || !phnrgx.test(mobile)){
         isValid=false;
         alert("Enter valid mobile number")  
       
      }
      var pwd = $("#pw").val()
      var cpwd = $("#cpw").val()
   
      if(pwd != cpwd){
       isValid=false;
       alert("Please Enter Password and Confirm password same!!")
      }
    }else if(isValid = true){
      alert("Succsessfully registerd :)")
    
    
    
})