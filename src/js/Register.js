
const nname =document.getElementById("nname")
const lastname =document.getElementById("lastname")
const usser =document.getElementById("usser")
const gmail =document.getElementById("gmail")
const pass =document.getElementById("pass")
const boton =document.getElementById("boton")
const texto =document.getElementById("texto")

const lista = JSON.parse(localStorage.getItem("lista"))||[];

boton.addEventListener("click", function () { 
    
    if (gmail.value === " " && usser.value === " " && pass.value === " ") {

        texto.innerHTML = "Ingrese sus datos"
        
    }else{

        if (gmail.value.length > 0 && usser.value.length > 0 && pass.value.length > 0) {
            let cajitanname = nname.value
            let cajitalast = lastname.value
            let cajitausser = usser.value
            let cajitacorreo = gmail.value
            let cajitafuerte = pass.value

            let persona = {

              Nombre: cajitanname,
              Apellido: cajitalast,
              Usuario: cajitausser,
              Correo: cajitacorreo,
              Contraseña: cajitafuerte

            }

            texto.innerText = "Su registro fue exitoso"

          lista.push(persona)
          console.log(lista);

          localStorage.setItem("lista", JSON.stringify(lista))



          setTimeout(() => {
            location.href= "Login.html"
          }, 5000);


        }

    }








    


    


})