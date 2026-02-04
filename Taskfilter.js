const searchQuery="SQL";
const IDtoDelete=4;
// Out Data Array of objects
const tasks=[
    {
        id:1,title:"Learn Githup Basics",status:"completed"
    },
    {
        id:2,title:"push the code to gitup",status:"completed"
    },
    {
        id:3,title:"Master React Hook",status:"pending"
    },
    {
        id:4,title:"build backend API",status:"pending"
    },
    {
        id:5,title:"SQL",status:"pending"
    }
]
console.log("Following are the pending Task")
const pendingTask=tasks.filter((task)=>task.status=="pending")
console.table(pendingTask)
const search=tasks.filter((task)=>task.title.toLowerCase().includes(searchQuery.toLowerCase()))
console.log("Search Result")
console.log(search)
const Updatedtask=tasks.filter((task)=>task.id!==IDtoDelete)
console.log(`ID to be deleted ${IDtoDelete}`)
console.log("Updatedtask")
console.log(Updatedtask)
function addTask(newTask)
{
    const newTitle={
        id:tasks.length+1,title:newTask,status:"pending"
    };
    tasks.push(newTitle)
    console.log(`Added new task:${newTask}`)
}
addTask("build UI")
addTask("build Responsive webpage")
console.log(tasks)