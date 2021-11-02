var addTask = document.getElementById("add_task");
var form = document.querySelector(".form form");
var addToTask = document.getElementById("addToTask");
var taskBody = document.getElementById("taskBody");
var taskList = document.getElementById("taskList");
addTask.classList.add("displayInitial");
form.classList.add("displayNone");
addTask.addEventListener("click", () => {
  addTask.classList.remove("displayInitial");
  form.classList.add("displayInitial");
});

// axios get and post and delet request

addToTask.addEventListener("click", async (e) => {
  e.preventDefault();
  const taskValue = taskBody.value;
  console.log(taskValue);
  if(taskValue!=''){

    const body = {
      taskValue,
    };
    await axios.post("/task", body).then(function (response) {});
    getAlltasck();
    taskBody.value = "";
  }
});

// get all task

const getAlltasck = async () => {
  await axios.get("/task").then((response) => {
    taskList.innerHTML = "";
    response.data.forEach((task) => {
      var li = document.createElement("li");
      var input = document.createElement("input");
      input.setAttribute("type", "radio");
      var i = document.createElement("i");
      i.classList.add("fas");
      i.classList.add("fa-trash-alt");
      i.setAttribute("id", task._id);
      // i.setAttribute("onclick", 'deleteTask('+task._id+')');
      li.appendChild(input);
      li.innerHTML += task.body;
      li.appendChild(i);
      taskList.appendChild(li);
      deleteTask();
    });
  });
};
getAlltasck();

// delete task
const deleteTask = () => {
  var trashs = document.querySelectorAll("i.fa-trash-alt");
  trashs.forEach((trash) => {
    trash.onclick = async (e) => {
      const taskId = e.target.attributes.id.nodeValue;
      console.log(taskId);
     const response =   await axios.delete('/task/'+taskId)
     console.log(response);
     getAlltasck();
    };
  });
};
