var taskForm;
var addButton;
var cancelButton;
var saveButton;

/**
 * startApp will select all the element and make them 
 * globally available accross the app, and 
 * add event listeners to the elements
 * 
 * @param {*} params 
 */
function startApp(params) {
     taskForm = document.querySelector('.taskForm')
     addButton = document.querySelector('.add-button')
     cancelButton = document.querySelector('.cancelButton')
     saveButton = document.querySelector('.saveButton')
     // form = document.querySelector('.form')

     console.log(taskForm, addButton, cancelButton, cancelButton)
    addButton.addEventListener('click', showModal);
    cancelButton.addEventListener('click', hideModal);
    saveButton.addEventListener('click', saveTask);
   // form.addEventListener('click', value)

}


function showModal(event) {
    event.preventDefault()
    console.log('Hey there clicker!');
   // taskForm.style.display= 'block'

   taskForm.classList.add('show')
   taskForm.classList.remove('hide')
}


function hideModal(event) {
    event.preventDefault()
    console.log(' cancel button has been clicked');
   //taskForm.style.display= 'none'

   taskForm.classList.add('hide')
   taskForm.classList.remove('show')
}

function saveTask(event){
    event.preventDefault()
    console.log(' save button has been clicked');

    const nameInput = document.querySelector('#name')
    const statusInput = document.querySelector('#status')
    const dateInput = document.querySelector('#date')

    console.log(nameInput.value,statusInput.value,dateInput.value)

    const taskList = document.querySelector('.task-list')

    const container = document.createElement('div')
    container.classList.add('task-container')


    const taskNameSpan = document.createElement('span')
    taskNameSpan.innerHTML = nameInput.value
    const statusSpan = document.createElement('span')
    statusSpan.innerHTML = statusInput.value
    const dateSpan = document.createElement('span')
    dateSpan.innerHTML = dateInput.value

    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'Delete'
    const editButton = document.createElement('button')
    editButton.innerHTML = 'Edit'

    container.append([taskNameSpan, statusSpan, dateSpan, editButton, deleteButton])
    taskList.appendChild(container)

}

function cancelButton(event){
    event.preventDefault()
    console.log(' cancel button has been clicked');

    

}
startApp()
// Getting value from input elements 

function value(event) {
    event.preventDefault()
    var input = document.getElementById("name");
    console.log(input.value)
  }
