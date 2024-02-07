function ch1()
{let h1 = document.querySelector('h1')
h1.style.color="red"}

function ch3(){
let h3 = document.querySelectorAll('h3')
for(let i = 0;i < h3.length ; i++){
    h3[i].style.color="green"
}
}

function ch5(){
let h5 = document.querySelectorAll('h5')
for(let i = 0;i < h5.length ; i++){
    h5[i].style.color="blue"
}
}

function chggreen(){
    let cg = document.querySelectorAll('.green')
    for(i = 0 ; i < cg.length ; i++){
        cg[i].style.color="green"
    }
}
function chgblue(){
    let cb = document.querySelectorAll('.blue')
    for(i = 0 ; i < cb.length ; i++){
        cb[i].style.color="blue"
    }
}

function chgred(){
    let cr = document.querySelectorAll('.red')
    for(i = 0 ; i < cr.length ; i++){
        cr[i].style.color="red"
    }
}