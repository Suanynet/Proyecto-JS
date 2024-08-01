
const gmail2 =document.getElementById("gmail2")
const pass2 =document.getElementById("pass2")
const botonI =document.getElementById("botonI")
const textito =document.getElementById("textito")


let lista = JSON.parse(localStorage.getItem("lista")||[])

console.log(lista);
botonI.addEventListener("click", function () {
    
    let caja = gmail2.value
    let cajapass = pass2.value
    
    let resulcaja = caja.trim()
    let resulcajapass = cajapass.trim()



    for (let index = 0; index < lista.length; index++) {

        if (resulcaja === "" || resulcajapass === "" ) {

            textito.innerText = "Ingrese los datos solitados"

            setTimeout(() => {
                location.reload()
            }, 4000);
            break
            
        }else{

            if (lista[index].Correo !== gmail2.value && lista[index].Contraseña !== pass2.value) {

                textito.innerText = "Los datos ingresados son incorrectos o no existen en el sistema"

                setTimeout(() => {
                    location.reload()
                }, 4000);
                break
                
            }else{

                if (lista[index].Correo === gmail2.value && lista[index].Contraseña === pass2.value) {
            
                    textito.innerHTML = "Los datos ingresados fueron registrados con exito"

                    setTimeout(() => {
                        location.href = "Proyecto.html"
                    }, 5000);
               }

            }
        }







        
        
    }

    

})

