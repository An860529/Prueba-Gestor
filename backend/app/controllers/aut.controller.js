const fecha = document.querySelector('#fecha')
const lista = document.querySelector('#lista')
const input = document.querySelector('#input')
const enter = document.querySelector('#enter')
const check = 'checkbox'
const uncheck = 'form-check-input'
const lineThrough = 'line-through'
let id
let LIST


const FECHA = new Date()
fecha.innerHTML= FECHA.toLocaleDateString('es-CO',{weekday:'long',month:'short', day: 'numeric', year: 'numeric'})


function agregarTarea (tarea,id,realizado,eliminado){

    if(eliminado){return}
    const REALIZADO = realizado ?check: uncheck
    const LINE = realizado ?lineThrough: ''

    const elemento=
        `<li class="list-group-item" id="element">
            <tbody>
                <tr>
                    <th scope="row">1</th>
                        <td>
                            <label class="form-check-label text ${LINE}" for="firstCheckbox">${tarea}</label>
                        </td>
                        <td>
                            <input class="${REALIZADO}" type="checkbox" value="" data="realizado" id="${id}">
                        </td>
                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16" data="eliminado" id="${id}">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                            </svg>
                        </td>
                </tr>
            </tbody>
        </li>`
 
lista.insertAdjacentHTML("beforeend",elemento);
}

function tareaRealizada(element){
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector('.text').classList.toggle(lineThrough)
    console.log(LIST(element.id).realizado)
    LIST[element.id].realizado= LIST[element.id].realizado ?false: true

}

function tareaEliminada(element){
    element.parentNode.parentNode.removeChild(element.parentNode)
    LIST[element.id].eliminado = true

}

enter.addEventListener('click',() => {
    const tarea = input.value
    if(tarea){
        agregarTarea(tarea,id,false,false)
        LIST.push({
            nombre: tarea,
            id: id,
            realizado: false,
            eliminado: false
        })
        localStorage.setItem('GESTOR', JSON.stringify(LIST))
        id ++
        input.value= ''
    }
})

document.addEventListener('keyup', function(event){
    if(event.key == 'Enter'){
        const tarea = input.value
        if(tarea){
            agregarTarea(tarea,id,false,false)
            LIST.push({
                nombre: tarea,
                id: id,
                realizado: false,
                eliminado: false,
            })
        localStorage.setItem('GESTOR', JSON.stringify(LIST))
        id ++
        input.value= ''
        }
    }
})

lista.addEventListener('click', function(event){
    const element= event.target
    const elementData = element.attributes.data.value;
    console.log(elementData);

    if(elementData == 'realizado'){
        tareaRealizada(element)
    }
    else if(elementData == 'eliminado'){
        tareaEliminada(element)
        console.log("eliminado");
    }
    localStorage.setItem('GESTOR', JSON.stringify(LIST))
})


let data= localStorage.getItem('GESTOR')
if (data){
    LIST= JSON.parse(data)
    // console.log(LIST);
    id = LIST.length
    cargarLista(LIST)
}else{
    LIST= []
    id= 0
}

function cargarLista(array){
    array.forEach(function(i){
        agregarTarea(i.nombre,i.id,i.realizado,i.eliminado)
    })
}

