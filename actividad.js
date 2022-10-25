const ticket=200
const estudiante=80
const trainee=50
const junior=15

function calcTotal(){
    let cantidad=document.getElementById("cantidad").value
    let categoria=document.getElementById("categoria").value

   
    let total=0
    if (categoria==1) {
        total=cantidad*ticket*.2 
    } else if (categoria==2) {
        total=cantidad*ticket*.5 
    } else {
        total=cantidad*ticket*.85 
    }

    document.getElementById("total").innerHTML=`Total a pagar: $${total}`
}
