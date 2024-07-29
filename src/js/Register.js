
const nname =document.getElementById("nname")
const lastname =document.getElementById("lastname")
const usser =document.getElementById("usser")
const gmail =document.getElementById("gmail")
const pass =document.getElementById("pass")
const boton =document.getElementById("boton")

const lista = JSON.parse(localStorage.getItem("lista"))||[];

boton.addEventListener("click", function () {
    
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

    alert("Su registro fue exitoso")


    lista.push(persona)
    console.log(lista);

    localStorage.setItem("lista", JSON.stringify(lista))




})