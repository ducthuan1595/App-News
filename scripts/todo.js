'use strict'

// selected elements
const inputTask = document.getElementById('input-task');
const btnAdd = document.getElementById('btn-add');
const todoList = document.getElementById('todo-list');

// console.log(todoArr)

// get todo lists of current user
const owner = ()=> {
  const listsTodo = [];
  todoArr.some(user => {
    let listTodoCurrentUser = user;
    if(listTodoCurrentUser.owner === currentUser.username) {
      listsTodo.push(listTodoCurrentUser);
    }
  })
  return listsTodo;
}
owner();

////////////////////////////////////////////////
// handle event lister input task
btnAdd.addEventListener('click', ()=> {
  const dataInput = new Task(
    inputTask.value,
    currentUser.username,
    false
  );

  // check user is logged in or not
  if(Object.keys(currentUser).length === 0) return alert('Please, login to add todo!')
  if(dataInput.task.trim().length > 0) {
    todoArr.push(dataInput)
    // save localStorage
    saveStorage('todoArr', todoArr);
    displayTodoListUI();
  }
})

/////////////////////////////////////////////////////////////////
// render todoList UI
const displayTodoListUI = () => {
  todoList.innerHTML = '';
  owner().map(todo => {
    const li = document.createElement('li');
    li.innerHTML = `<li class="${todo.isDone ? 'checked' : ''}">${todo.task}<span class="close">×</span></li>`;

    todoList.appendChild(li);
  })
  inputTask.value = '';
  toggleTask();

}
displayTodoListUI();
toggleTask();


///////////////////////////////////////////////////
// toggle task
function toggleTask() {
  console.log('click')
  const tasks = document.getElementById('todo-list').querySelectorAll('li > li');
  console.log(tasks)
  tasks.forEach((task, index) => {
    task.addEventListener('click', (e)=> {
      // only select element without close element
      if(e.target !== task.children[0]){
        // console.log(todoArr[index].isDone);
        // toggle checked when hit task
        task.classList.toggle('checked')
        // change isDone
        owner()[index].isDone = task.classList.contains('checked') ? true : false;
      
        // // save to local storage
        saveStorage('todoArr', todoArr)
      }
      
    })
  })
}
toggleTask();


////////////////////////////////////////////////////
const deleteTask = ()=> {
  const closes = document.querySelectorAll('.close');
  closes.forEach((close, index) => {

    close.addEventListener('click', ()=> {
      console.log(todoArr[index])
      // remove task
      todoArr.splice(index, 1);
      // save local storage
      saveStorage('todoArr', todoArr);
      // render task UI
      displayTodoListUI()
      
    })
  })
  

}
deleteTask();


