let PresentTasks = [];

class Todo {
  constructor(id, title, completed = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }

  toggleComplete() {
    this.completed = !this.completed;
  }
}

let idCount = 0;

const textInput = document.querySelector("#input");
const addBtn = document.querySelector("#add");

const pTasks = document.querySelector("#pTasks");

addBtn.addEventListener("click", () => {
  const value = textInput.value.trim();

  if (value !== "") {

    const newTask = new Todo(idCount++, value);

    PresentTasks.push(newTask);

    textInput.value = "";

    const newli = document.createElement("li");

    const cmp = document.createElement("button");
    cmp.textContent = "Complete";

    const dlt = document.createElement("button");
    dlt.textContent = "Delete";

    cmp.dataset.id = newTask.id;
    dlt.dataset.id = newTask.id;

    newli.append(newTask.title);

    newli.append(cmp);
    newli.append(dlt);

    pTasks.append(newli);

    // COMPLETE LOGIC
    cmp.addEventListener("click", () => {

      const task = PresentTasks.find(task => {
        return task.id == cmp.dataset.id;
      });

      task.toggleComplete();

      if (task.completed) {
        newli.style.textDecoration = "line-through";
        cmp.textContent = "Undo";
      } else {
        newli.style.textDecoration = "none";
        cmp.textContent = "Complete";
      }

      console.log(PresentTasks);
    });

    // DELETE LOGIC
    dlt.addEventListener("click", () => {

      PresentTasks = PresentTasks.filter(task => {
        return task.id != dlt.dataset.id;
      });

      newli.remove();

      console.log(PresentTasks);
    });

    console.log(PresentTasks);
  }
});