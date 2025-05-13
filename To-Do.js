let boton = document.querySelector('#botonAgregar')
let lista = document.querySelector('.lista')
let input = document.querySelector('#tarea')
let agregar = document.querySelector('#agregar')
let filtro = document.querySelector('#filtro')
let inputBuscador = document.querySelector('#buscador')
let tareas = []
let Otrofiltro = []
let reserva;
let busqueda;

const agregarTarea = () => {
    input.value=input.value.trim()
    let nuevaTarea = {
        texto: input.value,
        isCompleted: false,
        html: ''
    }
    console.log(nuevaTarea.key)

    if(input.value.length == 0)
    {
        input.classList = 'form-control border-danger w-100 border-2'
        input.placeholder = 'NO HAY NINGUNA TAREA AGREGADA'
    }
    else 
    {
        input.classList = 'form-control w-100'
        let li = document.createElement('li')
        li.className = 'w-100 d-flex flex-wrap align-items-center justify-content-between border border-2 border-primary rounded p-1 my-1'
        let eliminar = document.createElement('button')
        eliminar.classList.add('btn', 'btn-danger', 'mx-1')
        eliminar.innerText='Eliminar'
        let completado = document.createElement('button')
        completado.classList.add('btn', 'btn-success')
        completado.innerText = 'Completado'
        let div = document.createElement('div')
        
        li.innerText = nuevaTarea.texto
        li.appendChild(div)
        div.appendChild(eliminar)
        div.appendChild(completado)
        
        lista.appendChild(li)
        nuevaTarea.html = li
        
        input.value=''
        input.placeholder = 'Escribe una tarea para agregar a tu lista'
        
        completado.addEventListener('click', (event) => {
            li.className = 'w-100 d-flex flex-wrap align-items-center justify-content-between border border-2 border-success rounded p-1 my-1 text-decoration-line-through'
            tareas = tareas.map((item) => {
                if(item.texto == event.target.previousElementSibling.parentElement.parentElement.firstChild.textContent) 
                    {
                        item.isCompleted = true
                    }
                    return item
                })
                completado.remove()
        })


        eliminar.addEventListener('click', (event) => {
            lista.removeChild(li)
            tareas = tareas.filter(item => item.texto != event.target.parentElement.parentElement.firstChild.textContent)
            console.log(tareas)
        })

        eliminar.addEventListener('mouseover', () => {
            li.classList.remove('border-primary')
            li.classList.add('border-danger')
        } )
        
        eliminar.addEventListener('mouseout', () => {
            li.classList.remove('border-danger')
            li.classList.add('border-primary')
        } )
        tareas.push(nuevaTarea)
    }
    console.log(tareas)
}

const filtroTareas = (value) => {
    if(value == "Pendiente")
    {
        Otrofiltro = tareas.filter ((item) => item.isCompleted == false)
    }
    else if (value == 'Completados')
    {
        Otrofiltro = tareas.filter ((item) => item.isCompleted == true)
    }
    else 
    {  
        Otrofiltro = tareas
    }

    lista.innerHTML = ''
    Otrofiltro.forEach((a) => {
        lista.appendChild(a.html)
    })
}

const buscador = (valor) => {
    busqueda = tareas.filter((b) => b.texto.toLowerCase().includes(valor.toLowerCase()))
    lista.innerHTML = ''
    busqueda.forEach((b) => {
        lista.appendChild(b.html)
    })
}

boton.addEventListener('click', () => {
    agregarTarea()
})
agregar.addEventListener('keydown', (event) => {
    if(event.key == 'Enter')
    {
        agregarTarea()
    }
})

filtro.addEventListener('change', (event) => {
    filtroTareas(event.target.value)
})

inputBuscador.addEventListener('keyup', (event) => {
    buscador(event.target.value)
})


