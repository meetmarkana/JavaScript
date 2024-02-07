let greet = document.getElementById("in").value

let ans

switch(greet){
    case 'english' : ans = "Hello!"
    break

    case 'spanish' : ans = "¡Hola!"
    break

    case 'french' : ans = "Bonjour"
    break

    default :  ans = ""
    document.getElementById("ans").innerText = "Language not supported."}

document.getElementById("ans").innerText = `${ans}`