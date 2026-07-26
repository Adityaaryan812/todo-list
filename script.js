const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {

    if(taskInput.value.trim()===""){
        alert("Enter a task");
        return;
    }

    let li=document.createElement("li");

    let span=document.createElement("span");
    span.innerText=taskInput.value;

    span.onclick=function(){
        span.classList.toggle("completed");
        saveData();
    }

    let btn=document.createElement("button");
    btn.innerText="Delete";
    btn.className="delete";

    btn.onclick=function(){
        li.remove();
        saveData();
    }

    li.appendChild(span);
    li.appendChild(btn);

    taskList.appendChild(li);

    taskInput.value="";
    saveData();
}

function saveData(){
    localStorage.setItem("tasks",taskList.innerHTML);
}

function showTasks(){
    taskList.innerHTML=localStorage.getItem("tasks") || "";

    document.querySelectorAll("span").forEach(span=>{
        span.onclick=function(){
            span.classList.toggle("completed");
            saveData();
        }
    });

    document.querySelectorAll(".delete").forEach(btn=>{
        btn.onclick=function(){
            btn.parentElement.remove();
            saveData();
        }
    });
}

showTasks();