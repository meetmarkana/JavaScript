function chgodd(){
    let podd = document.querySelectorAll('.odd')
    for(let i=0 ; i<podd.length;i++){
        podd[i].style.color ="red"
        podd[i].style.backgroundColor ="blue"
    }
}

function chgeven(){
    let peven = document.querySelectorAll('.even')
    for(let i=0 ; i<peven.length;i++){
        peven[i].style.color ="yellow"
        peven[i].style.backgroundColor ="black"
    }
}