let dayname = document.getElementById("in").value

switch(parseInt(dayname)){
    case 1 : dayname = "Monday"
    console.log("It's the start of the workweek.")
    break

    case 2 : dayname = "Tuesday"
    break

    case 3 : dayname = "Wednesday"
    break

    case 4 : dayname = "Thursday"
    break

    case 5 : dayname = "Friday"
    console.log("It's almost the weekend!")
    break

    case 6 : dayname = "Saturday"
    break

    case 7 : dayname = "Sunday"
    break

    default : console.log("It's some other day.")
}
document.getElementById("ans").innerText = `Today is ${dayname}`