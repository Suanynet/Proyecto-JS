
const gmail2 =document.getElementById("gmail2")
const pass2 =document.getElementById("pass2")
const botonI =document.getElementById("botonI")


let lista = JSON.parse(localStorage.getItem("lista")||[])

console.log(lista);
botonI.addEventListener("click", function () {
    
    let caja = gmail2.value
    let cajapass = pass2.value


    for (let index = 0; index < lista.length; index++) {
        
        if (lista[index].Correo === gmail2.value && lista[index].Contraseña === pass2.value) {
            
        }
    }


})

