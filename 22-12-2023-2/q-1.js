let Student = {
    name : "Meet",
    age : 18,
    grade : 4,

    greet(){
        console.log("Have a nice day!")
    }
}
console.log(Student)

console.log(Student.name)
console.log(Student.age)

Student.age = 19

Student.height = 5.6
Student.course = "fullstack"

console.log(Student.course)
 delete(Student.course)

 Student.greet()