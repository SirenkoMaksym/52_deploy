const form = document.querySelector('#form')
const todoListOl = document.querySelector('#todo-list')
const clearBtn = document.querySelector('#clear')

let todoList = []
function changeStatus(event) {
  if (event.target.style.textDecoration === 'line-through') {
    event.target.style.textDecoration = 'none'
  } else {
    event.target.style.textDecoration = 'line-through'
  }
}

form.addEventListener('submit', e => {
  e.preventDefault()
  let doObjeckt = {  
    name: e.target.doname.value.toLowerCase()
  }
  if (todoList.includes(doObjeckt.name)) {
    e.target.doname.value = ''
    alert('It is already on the list 💀')
  } else {
    todoList.push(doObjeckt.name)
    doObjeckt.name = doObjeckt.name.charAt(0).toUpperCase() + doObjeckt.name.slice(1)

    console.log(todoList)
   
    const listElement = document.createElement('li')
    
    listElement.textContent = `${doObjeckt.name}`
    
    listElement.onclick = changeStatus
    // добавили к родителю List
    todoListOl.appendChild(listElement)
    
    e.target.doname.value = ''
  }
})

// пишем функцию для удаления элементов
function clearList() {
  // пока в родительском элементе есть дети li
  while (todoListOl.hasChildNodes()) {
    // удаляем первый элемент из родителя
    todoListOl.firstChild.remove()
  }

  todoList = []
}
// добавляем событие на onCLick
clearBtn.onclick = clearList