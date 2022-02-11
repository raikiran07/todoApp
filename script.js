'use-strict';
const job = document.getElementById("user-input");
const jobList = document.getElementById("job-list");
const subBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");

let jobs = [];
let span;

function addJob(){
    if(job.value != ''){
        job.value = job.value.replace(job.value[0],job.value[0].toUpperCase());
        jobs.push(job.value);
        const li = document.createElement("li");
         span = document.createElement("span");
        span.innerHTML = "delete";
        span.className = "delete-btn";
        li.innerHTML = job.value;
        li.append(span);
        jobList.append(li);
        // job.value = 'Enter task';
        // job.style.color = "#8c8c8c";
    }
    else{
        alert("Add a valid task!");
    }

    console.log(jobs);

   

    span.addEventListener("click",deleteItem,false);
}

function resetAll(){
    jobs = [];
    jobList.innerHTML = ' ';
}

//DELETING ITEMS
function deleteItem(){
    this.parentNode.remove();
}

subBtn.addEventListener("click",addJob);
resetBtn.addEventListener("click",resetAll);
span.addEventListener("click",deleteItem);