// Recreate the todo list above:

// Create an HTML, CSS and a JS file.

// In the HTML file
// create a form with one input type="text", and a “Submit” button.
// add an empty div below the form
// <div class="listTasks"></div>

// In the js file, you must add the following functionalities:
// Create an empty array : const tasks = [];

// Create a function called addTask(). As soon as the user clicks on the button:
// check that the input is not empty,
// then add it to the array (ie. add the text of the task)
// then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
// Each new task added should have (starting from left to right - check out the image at the top of the page)
// a “X” button. Use font awesome for the “X” button.
// an input type="checkbox". The label of the input is the task added by the user.

// BONUS I (not mandatory):
// Change the variable tasks to an array of task objects.
// Each new task added to the array should have the properties : task_id, text and done (a boolean - false by default).
// Every new task object should have a task_id, starting from 0, and a data-task-id attribute, which value is the same as the task_id. Check out data-* attributes here.
// Create a function named doneTask(), that as soon as the user clicks on the “checkbox” input, the done property should change from false to true in the object, and from black to crossed out red in the DOM.

// BONUS II (not mandatory):
// Create a function named deleteTask(), that as soon as the user clicks on the “X” button, delete that specific task from the array listTasks.

// -->
const tasks=[]
let id=0
document.forms[0].addEventListener('submit',addTask)
function addTask(e){
    e.preventDefault()
    if (document.getElementsByTagName('input')[0].value.trim()!=''){
        let task={
            task_id:id,
            text:document.getElementsByTagName('input')[0].value,
            done:false
        }
        tasks.push(task)
        let newTask=document.createElement('div')
        let newTaskPar=document.createElement('span')
        let newX=document.createElement('button')
        let newText=document.createTextNode(document.getElementsByTagName('input')[0].value)
        let newButText=document.createTextNode('X')
        let newCheckbox=document.createElement('input')
        newX.addEventListener('click',deleteTask)
        newCheckbox.setAttribute('type','checkbox')
        newTask.appendChild(newX)
        newTask.appendChild(newCheckbox)
        newTask.appendChild(newTaskPar)
        newX.appendChild(newButText)
        newTaskPar.appendChild(newText)
        newTask.setAttribute('data-task-id',id)
        newTask.addEventListener('change',doneTask)
        document.getElementsByClassName('listTasks')[0].appendChild(newTask)
        id++
        console.log(tasks);
        document.getElementsByTagName('input')[0].value=''
        if (document.getElementsByClassName('listTasks')[0].innerHTML.trim() != ''){
            document.getElementsByClassName('listTasks')[0].style.visibility='visible'
        }
    }   
}
function doneTask(e){
    if(e.target.type == 'checkbox'){
        let currentId=e.target.parentElement.getAttribute('data-task-id');
        for (item of tasks){
            if (item.task_id==currentId){
                item.done=!item.done
            }
        }
        for (item of tasks){
            if (item.done == true){
            document.querySelector(`[data-task-id="${item.task_id}"]`).lastElementChild.style.color='red'
            document.querySelector(`[data-task-id="${item.task_id}"]`).lastElementChild.style.textDecoration='line-through'
            } else { document.querySelector(`[data-task-id="${item.task_id}"]`).lastElementChild.style.color='black'
            document.querySelector(`[data-task-id="${item.task_id}"]`).lastElementChild.style.textDecoration='none'}
        }
    } 
} 
function deleteTask(e){
    let currentId=e.target.parentElement.getAttribute('data-task-id')
    for (item in tasks){
        if (tasks[item].task_id==currentId){
            tasks.splice(item,1)
        }
    e.target.parentElement.remove();
    }
    if (document.getElementsByClassName('listTasks')[0].innerHTML.trim() == ''){
        document.getElementsByClassName('listTasks')[0].style.visibility='hidden'
    }
}
