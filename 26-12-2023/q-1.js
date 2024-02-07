let student = [
    {sname : 'mk',score:89},
    {sname : 'kk',score:85},
    {sname : 'xy',score:70},
    {sname : 'mr',score:99},
    {sname : 'rm',score:99},
    {sname : 'yz',score:60},
]
let high = []
for(i in student){
    if(student[i].score > 90){
        high.push(student[i].sname)
    }
    
}
console.log(high)