const ticket=200
const estudiante=80
const trainee=50
const junior=15

function calcTotal(){
    let cantidad=document.getElementById("cantidad").value
    let categoria=document.getElementById("categoria").value

    let total=0

    if (categoria==1){
        total = ticket*cantidad*.2
    } else if (categoria==2){
        total = ticket*cantidad*.5
    } else (categoria==3);{
        total = ticket*cantidad*.85
    }

    document.getElementById("total").innerHTML=`Total a pagar: $${total}`
}