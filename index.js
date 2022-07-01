const userInputText=document.getElementById("add-text");
const form=document.getElementById("todo-form");
const taskList=document.getElementById("task-lst");
const clearButton=document.getElementById("clr-btn");
const deleteButton=document.getElementsByClassName("task-itm");
const pendingTask=document.getElementById("pending");
const totalTask = document.getElementsByClassName("task-item");
const clearAllBtn = document.getElementById('clr-btn');

//check user input task validation 
const checkvalidation=(text)=>{
    if(text.trim()!=0) return true;
    else return false;
}
// clicking on add btn
form.onsubmit = (event)=>{
    event.preventDefault();
    let enteredTask=userInputText.value;
    if(checkvalidation(enteredTask)){
        let newLiTag=document.createElement("li");
        const taskId = totalTask.length;
        newLiTag.setAttribute('id',taskId);
        newLiTag.setAttribute("class","task-item")
        newLiTag.textContent=enteredTask;
        taskList.appendChild(newLiTag);
        let testDelete=document.createElement("button");
        newLiTag.appendChild(testDelete);
        testDelete.innerHTML=`<i class="fas fa-trash"></i>`;
        userInputText.value="";
        testDelete.onclick = onDelete.bind(null,taskId);
    }
    pendingTask.textContent=totalTask.length;
}

// delete a task
const onDelete = (index) => {
    const child=document.getElementById(index);
    taskList.removeChild(child);
    pendingTask.textContent=totalTask.length;
}

// clear all
clearAllBtn.onclick=()=>{
    taskList.innerHTML= ""
    pendingTask.textContent=totalTask.length;
}