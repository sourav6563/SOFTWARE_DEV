const fs = require("fs");
const filepath = "./tasks.json";
const command = process.argv[2];
const argument = process.argv[3];
const loadTask = () => {
  try {
    const dataBuffer = fs.readFileSync(filepath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};
const savetask = (tasks) => {
  const dataJsSON = JSON.stringify(tasks);
  fs.writeFileSync(filepath, dataJsSON);
};

const addTask = (task) => {
  const tasks = loadTask();
  tasks.push({ task });
  savetask(tasks);
  console.log("task added", task);
};
const listTask = () => {
    const tasks= loadTask()
    tasks.forEach((task,index) => {
        console.log(`${index +1}-${task.task}`);
        
        
    });
}


if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTask();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log(`Command not found!`);
}
