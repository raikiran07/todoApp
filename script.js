'use-strict';
const job = document.getElementById("user-input");
const jobList = document.getElementById("job-list");
const subBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");
// const body = document.querySelector(".body");

let jobs = [];
let span;
let done;
let divEle;

function addJob(){
    if(job.value != ''){
        job.value = job.value.replace(job.value[0],job.value[0].toUpperCase());
        jobs.push(job.value);
        const li = document.createElement("li");
        //div element 
        divEle = document.createElement("div");
        divEle.className = "action-icons";
       
        //tick mark
        done = document.createElement("span");
        done.innerHTML = "✅";
        done.className = "correct-btn";
        divEle.append(done);

        span = document.createElement("span");
        span.innerHTML = "❎";
        span.className = "delete-btn";
        li.innerHTML = `<p>${job.value}</p>`;
        divEle.append(span);

        
        li.appendChild(divEle);
        jobList.append(li);
        job.value = '';
        
        // job.value = 'Enter task';
        // job.style.color = "#8c8c8c";
    }
    else{
        alert("Add a valid task!");
    }

    console.log(jobs);

   console.log(done);
   console.log(span);

    span.addEventListener("click",deleteItem,false);
    done.addEventListener("click",workDone,false);
}

function resetAll(){
    // jobs = [];
    // jobList.innerHTML = ' ';
    location.reload();
}

//DELETING ITEMS
function deleteItem(){
    this.parentNode.parentNode.remove();
    // jobList.remove(this.parentNode);
}

function workDone(){
    this.parentNode.parentNode.className="done";
    
}

subBtn.addEventListener("click",addJob);
resetBtn.addEventListener("click",resetAll);
// span.addEventListener("click",deleteItem);


document.addEventListener("keypress",e=>{
    if(e.key==='Enter'){
        addJob();
    }
})

