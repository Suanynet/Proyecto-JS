const tareas =document.getElementById("tareas")
const date =document.getElementById("date")
const save =document.getElementById("save")
const tarEvents =document.getElementById("tarEvents")

const tarea =document.getElementById("tarea")
const evento =document.getElementById("evento")

let listaTarea = JSON.parse(localStorage.getItem("listaTarea"))||[]
let listaEvento = JSON.parse(localStorage.getItem("listaEvento"))||[]


save.addEventListener("click", function () {




    if (tarEvents.value === "tarea") {
        
        listaTarea.push(tareas.value + " " + date.value)

        localStorage.setItem("listaTareas", JSON.stringify(listaTarea)) || []
    
        const etareas = document.createElement("h2")
        const beditar =document.createElement("button")
        const beliminar =document.createElement("button")
        const bguardar = document.createElement("button")
        const divHijo= document.createElement("div")
        const inputEdita=document.createElement("input")
        
        etareas.innerHTML = tareas.value

        beditar.innerHTML="Editar"
        beliminar.innerHTML="Eliminar"

        etareas.innerText = tareas.value + " " + date.value

        divHijo.appendChild(etareas)
        divHijo.appendChild(beliminar)
        divHijo.appendChild(beditar)

        tarea.appendChild(divHijo)

        bguardar.innerText="Guardar"
      
    
        beliminar.addEventListener("click",function () {
            
            divHijo.remove()
        })

        beditar.addEventListener("click",function () {
            
            divHijo.appendChild(bguardar)
           divHijo.appendChild(inputEdita)
          

        })

        bguardar.addEventListener("click",function () {
            
            etareas.innerText = inputEdita.value
        })

 
        
    }else{

        if (tarEvents.value === "event") {

            listaEvento.push(tareas.value + " " + date.value)

            localStorage.setItem("listaEventos", JSON.stringify(listaEvento)) || []
            
            const Eeventos = document.createElement("h2")
            Eeventos.innerHTML = date.value
            evento.appendChild(Eeventos)

           const bbeditar =document.createElement("button")
           const bbeliminar =document.createElement("button")
           const bbguardar = document.createElement("button")
           const div= document.createElement("div")
           const inputEdit=document.createElement("input")

           Eeventos.innerHTML = evento.value

           bbeditar.innerHTML="Editar"
           bbeliminar.innerHTML="Eliminar"
           bbguardar.innerText= "Guardar"

           Eeventos.innerText = tareas.value + " " + date.value

          div.appendChild(Eeventos)
          div.appendChild(bbeliminar)
          div.appendChild(bbeditar)

           evento.appendChild(div)

           bbeliminar.addEventListener("click", function () {
            
            div.remove()

           })

           bbeditar.addEventListener("click", function () {
            
            div.appendChild(inputEdit)
            div.appendChild(bbguardar)

           })

           bbguardar.addEventListener("click", function () {
            
            Eeventos.innerText = inputEdit.value
            

           })


        }
    }



})


function listaI() {
    
    
   let valor = JSON.parse(localStorage.getItem("listaTareas"))||[]

   for (let index = 0; index < valor.length; index++) {



    console.log(valor[index]);
    let h2 =document.createElement("h2")

    h2.innerHTML = valor[index]

    tarea.appendChild(h2)

    let botoneliminar = document.createElement("button")
    let botoneditar = document.createElement("button")
    let botonguardar = document.createElement("button")
    let inputeditar = document.createElement("input")
    let divT = document.createElement("div")

    
    botoneliminar.innerHTML = "Eliminar"
    botoneditar.innerHTML= "Editar"
    botonguardar.innerHTML = "Guardar"
    
    divT.appendChild(h2)
    divT.appendChild(botoneliminar)
    divT.appendChild(botoneditar)
    divT.appendChild(botonguardar)

    tarea.appendChild(divT)
    
 
    
    botoneliminar.addEventListener("click", function () {
        
        divT.remove()

        let valor = JSON.parse(localStorage.getItem("listaTareas"))||[]

        let valorB = valor.filter(element => element !== h2.textContent);

        localStorage.setItem("listaTareas", JSON.stringify(valorB))

    })

    botoneditar.addEventListener("click", function () {
        
        divT.appendChild(botonguardar)
        divT.appendChild(inputeditar)

    })

    botonguardar.addEventListener("click", function () {

        let valor = JSON.parse(localStorage.getItem("listaTareas"))||[]

        console.log(h2.textContent);

        for (let index = 0; index < valor.length; index++) {

          if (h2.textContent === valor[index]) {
            
          valor[index] = inputeditar.value

          } 
            
        }
        
         localStorage.setItem("listaTareas", JSON.stringify(valor))

          h2.innerText = inputeditar.value
        

    })

}}

listaI()


function listaE() {
    
    let valor2 = JSON.parse(localStorage.getItem("listaEventos"))||[]

   for (let index = 0; index < valor2.length; index++) {


    let etih2 =document.createElement("h2")

    etih2.innerHTML = valor2[index]

    evento.appendChild(etih2)

    let buttoneliminar = document.createElement("button")
    let buttoneditar = document.createElement("button")
    let buttonguardar = document.createElement("button")
    let inputeditar2 = document.createElement("input")
    let divE = document.createElement("div")

    
    buttoneliminar.innerHTML = "Eliminar"
    buttoneditar.innerHTML= "Editar"
    buttonguardar.innerHTML = "Guardar"
    

    divE.appendChild(buttoneliminar)
    divE.appendChild(buttoneditar)
    divE.appendChild(buttonguardar)

    evento.appendChild(divE)
    
 
    
    buttoneliminar.addEventListener("click", function () {
        
        divE.remove()

        let valor2 = JSON.parse(localStorage.getItem("listaEventos"))||[]

        let valorE = valor2.filter(element => element !== etih2.textContent);

        localStorage.setItem("listaEventos", JSON.stringify(valorE))

    })

    buttoneditar.addEventListener("click", function () {
        
        divE.appendChild(buttonguardar)
        divE.appendChild(inputeditar2)

    })

    buttonguardar.addEventListener("click", function () {

        let valor2 = JSON.parse(localStorage.getItem("listaEventos"))||[]

        console.log(etih2.textContent);

        for (let index = 0; index < valor2.length; index++) {

          if (etih2.textContent === valor2[index]) {
            
          valor2[index] = inputeditar2.value

          } 
            
        }
        
         localStorage.setItem("listaEventos", JSON.stringify(valor2))

          etih2.innerText = inputeditar2.value
        

    })
    
}}

listaE()