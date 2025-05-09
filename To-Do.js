let boton = document.querySelector('#botonAgregar')
let lista = document.querySelector('.lista')
let input = document.querySelector('#tarea')
let body = document.querySelector('body')

const agregarTarea = () => {
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
        
        li.innerText = input.value
        li.appendChild(div)
        div.appendChild(eliminar)
        div.appendChild(completado)
        
        lista.appendChild(li)
        input.value=''
        input.placeholder = 'Escribe una tarea para agregar a tu lista'
        
        completado.addEventListener('click', () => {
            li.className = 'w-100 d-flex flex-wrap align-items-center justify-content-between border border-2 border-success rounded p-1 my-1 text-decoration-line-through'
            completado.remove()
        })


        eliminar.addEventListener('click', () => {
            lista.removeChild(li)
        })

        eliminar.addEventListener('mouseover', () => {
            li.classList.remove('border-primary')
            li.classList.add('border-danger')
        } )
        
        eliminar.addEventListener('mouseout', () => {
            li.classList.remove('border-danger')
            li.classList.add('border-primary')
        } )
    }
}





boton.addEventListener('click', () => {
    agregarTarea()
})
body.addEventListener('keydown', (event) => {
    if(event.key == 'Enter')
    {
        agregarTarea()
    }
})


