const tareas =document.getElementById("tareas")
const date =document.getElementById("date")
const save =document.getElementById("save")
const tarEvents =document.getElementById("tarEvents")

const tarea =document.getElementById("tarea")
const evento =document.getElementById("evento")

let lista2 = []



save.addEventListener("click", function () {
    
    lista2.push(tareas.value + " " + date.value)

    localStorage.setItem("lista2", JSON.stringify(lista2)) || []

    if (tarEvents.value === "tarea") {
        
    
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
