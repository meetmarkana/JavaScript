    let form = document.getElementById("taskform")

    form.addEventListener("submit",function (event){
        event.preventDefault()

        let title = document.getElementById("taskinp").value 
        let des = document.getElementById("discinp").value 
        let duedate = document.getElementById("dateinp").value 
        let priority = document.getElementById("priority").value 

        let list = document.createElement('ul')

    let li = document.createElement('li').innerHTML=
    `<h3>Title :-  ${title}</h3>
    <h3>Description :-  ${des}</h3>
    <h3>Due Date :-  ${duedate}</h3>
    <h3>Priority :-  ${priority}</h3>
    `
    list.append(li)
    
  
    list.style.flexBasis = "25%"
    list.style.border = "1px solid black"
    list.style.borderRadius = "10px"
  
        let tasks = {
          title,
          des,
          duedate,
          priority
      }

    let data = JSON.parse(localStorage.getItem("tsk")) || []
    
    data.push(tasks)
    
    localStorage.setItem("tsk",JSON.stringify(data))
    document.getElementById("tsklst").append(list)  
})

// function displayTasks(data){

//   let frm = document.getElementById("taskform")
//   frm.innerHTML=""

  

//    data.map((el,i)=>{
    
   
//   })
  

//   // document.getElementById("tsklst").append(list,delbtn)
  
// }

// let show = json.parse(localStorage.getItem("tsk")) || []

// displayTasks(show)

// function editTask(id){

//   let data = json.parse(localStorage.getItem("tsk"))

//   let edited=data.find(task=> task.title === title)

//   if(edited){
//     let newtitle=prompt("Enter New Title",edited.title)
      
//       if(newtitle !== null){
//         edited.title=newtitle
//         localStorage.setItem("tsk",JSON.stringify(data))
//         displayTasks(data)
//       }
//   }

// }

