
const btnAddTask = document.querySelector('.btn-add-task');
const toDoList = document.querySelector('.to-do-list');
const inputTask = document.querySelector('.input');

function addTask(){
     
    const task = inputTask.value.trim();
    if (!task) return;

    const li = document.createElement('li');
    li.className = 'task visible';
    li.innerHTML = `
    <p class="list-text">${task}</p>
    <span class="close--two">✖</span>
    `;

    toDoList.appendChild(li);
    
    inputTask.value = '';
    
    

}
toDoList.addEventListener('click', function(event){
    if (event.target.classList.contains('close--two')){
        event.target.closest('li').remove();
    }
})



btnAddTask.addEventListener('click', addTask);
inputTask.addEventListener('keypress',function(event){
   if( event.key === 'Enter'){
    addTask();
   }
})



