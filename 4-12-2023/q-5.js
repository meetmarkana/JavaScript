let grade = document.getElementById("in").value

let ans

switch(grade){
    case 'A' : ans = "Excellent! You got an A"
    break

    case 'B' : ans = "Well done! You got a B"
    break

    case 'C' : ans = "Good job! You got a C."
    break

    case 'D' : ans = "You got a D. Keep working hard!"
    break

    case 'F' : ans = "Unfortunately, you failed"
    break

    default :  ans = ""
    document.getElementById("ans").innerText = "Invalid grade"}

document.getElementById("ans").innerText = `${ans}`