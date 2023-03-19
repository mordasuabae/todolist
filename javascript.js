var taskForm = document.querySelector('.taskForm')
console.log(taskForm)

var myButton = document.querySelector('.buttontwo')
myButton.addEventListener('click', showModal);

var cancelButton = document.querySelector('.cancelButton')
var saveButton = document.querySelector('.saveButton')

cancelButton.addEventListener('click', hideModal);
saveButton.addEventListener('click', hideModal);


function showModal() {
    console.log('Hey there clicker!');
   // taskForm.style.display= 'block'

   taskForm.classList.add('show')
   taskForm.classList.remove('hide')
}


function hideModal() {
    console.log('Hey there clicker!');
   //taskForm.style.display= 'none'

   taskForm.classList.add('hide')
   taskForm.classList.remove('show')
}


