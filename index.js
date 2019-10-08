
const form = document.querySelector('form')
form.addEventListener('submit', addToDo)


function addToDo(event) {
    event.preventDefault()
   const newItem = document.createElement('li') 
   const input = document.querySelector('#item')
   newItem.innerText = input.value 
   const list = document.querySelector('ul')
   list.appendChild(newItem)
}

