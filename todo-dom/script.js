let newTask = document.querySelector('.item-name');
let add = document.querySelector('.add');
let tasks = document.querySelector('#ready-task');
let completeUI = document.querySelector('.complete ul');


let header = document.querySelector('#title');
header.textContent = "Add New Task";
loadEventListner();
function loadEventListner() {
    add.addEventListener('click', addTask);

}


let createTask = function (task) {
    let listItem = document.createElement('li');
    let divItem = document.createElement('div');
    let label = document.createElement('label');
    label.className = "form-check-label";
    let input = document.createElement('input');
    input.className = "checkbox";
    input.type = 'checkbox';
    label.innerHTML = task;
    let i = document.createElement('i');
    i.className = "input-helper";

    label.appendChild(input);
    label.appendChild(i);
    divItem.append(label);
    listItem.append(divItem);

    return listItem;
}

function addTask(event) {
    event.preventDefault();
    //if (newTask.value !== "") {
        let listItem = createTask(newTask.value);
        tasks.appendChild(listItem);
    //}
    newTask.value = "";
    bindInCompleteItems(listItem, completeTask);
}

let completeTask = function() {
    let listItem = this.parentElement.parentElement.parentElement;
    let deleteIcon = document.createElement('i');
    deleteIcon.className="remove mdi mdi-close-circle-outline";
    listItem.appendChild(deleteIcon);
    let checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.remove();
    completeUI.appendChild(listItem);

    bindCompleteItems(listItem, deleteTask)
}

let deleteTask = function(){
    console.log('work');
    let listItem = this.parentElement;
    completeUI.removeChild(listItem);
}

let bindInCompleteItems = function(listItem, checkboxclick) {
    let checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.onchange = checkboxclick;
}

let bindCompleteItems = function(listItem, deletebuttonClick) {
    let deletebtn = listItem.querySelector('.remove');
    deletebtn.onclick = deletebuttonClick;
}

for(let i=0; i<tasks.children.length; i++){
    bindInCompleteItems(tasks.children[i], completeTask)
}

for(let i=0; i<completeUI.children.length; i++){
    bindCompleteItems(completeUI.children[i], deleteTask)
}
