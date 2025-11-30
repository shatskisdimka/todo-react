import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import ToDoInfo from "./ToDoInfo";
import ToDoList from "./ToDoList";

const ToDo = () => {
  const tasks = [
    {
      id: "task-1",
      title: "Оплатить интернет",
      isDone: false,
    },
    {
      id: "task-2",
      title: "Приготовить ужин",
      isDone: true,
    },
  ];

  const deleteAllTasks = () => {
    console.log("Delete all tasks");
  };

  const deleteTask = (taskId) => {
    console.log(`Delete task: ${taskId}`);
  };

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`Task ${taskId} ${isDone ? "completed" : "is not completed"}`);
  };

  const filterTasks = (query) => {
    console.log(`Search: ${query}`);
  };

  const addTask = () => {
    console.log("Task added");
  };

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addTask={addTask} />
      <SearchTaskForm onSearchInput={filterTasks} />
      <ToDoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <ToDoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  );
};

export default ToDo;
