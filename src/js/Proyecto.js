const tareas =document.getElementById("tareas")
const date =document.getElementById("date")
const save =document.getElementById("save")
const tarEvents =document.getElementById("tarEvents")

const tarea =document.getElementById("tarea")
const evento =document.getElementById("evento")


save.addEventListener("click", function () {
    

    if (tarEvents.value === "tarea") {
        
    
        const etareas = document.createElement("h2")
        const bguardar =document.createElement("button")
        const guardarTE =document.createElement("button")
        
        
        
        etareas.innerHTML = tareas.value
        tarea.appendChild(etareas)
        
        etareas.innerText = tareas.value + " " + date.value

        const boton =document.createElement("button")
        
        boton.innerHTML = "Eliminar"
        tarea.appendChild(boton)



        boton.addEventListener("click", function () {
            
         const div = document.createElement("div")

          div.appendChild(etareas)
          div.appendChild(bguardar)
          div.appendChild(guardarTE)

        
            tarea.removeChild(boton)

            tareas.appendChild(div)
        })

        bguardar.innerHTML = "Editar"
        tarea.appendChild(bguardar)

        guardarTE.innerHTML = "Guardar"
        tarea.appendChild(guardarTE)


        bguardar.addEventListener("click", function () {

          let inputEdit =document.createElement("input")

            bguardar.appendChild(inputEdit)
            
        })


        


    }else{

        if (tarEvents.value === "event") {
            
            const Eeventos = document.createElement("h2")
            Eeventos.innerHTML = date.value
            evento.appendChild(Eeventos)

        }
    }

})
