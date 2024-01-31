import { useState } from "react";
import TaskInput from "./Components/TaskInput";
import TaskItem from "./Components/TaskItem";
import Stats from "./Components/Stats";

function App() {
  const [todoList, setTodoList] = useState([]);

  // add task
  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setTodoList([...todoList, newTask]);
  };
  // delete task
  const deleteTask = (deletTaskName) => {
    setTodoList(todoList.filter((task) => task.taskName !== deletTaskName));
  };
  // handle checkbox
  const togleCheckced = (taskName) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  };

  console.log(todoList);
  return (
    <main className="">
      <div className="flex flex-col w-[360px] items-center mx-auto mt-[50px] p-[30px] min-h-[500px] bg-slate-800 ">
        <h1 className="text-[24px] text-white font-semibold font-head">
          Tugas Harian
        </h1>
        <TaskInput addTask={addTask} />
        <div className="flex flex-col items-center mt-[10px] w-[280px]">
          <span className="text-gray-400  font-semibold font-head">
            Daftar Tugas
          </span>
          <ul className="flex flex-col w-full gap-[5px]">
            {todoList.map((task, key) => (
              <TaskItem task={task} key={key} deleteTask={deleteTask} togleCheckced={togleCheckced}/>
            ))}
          </ul>
          {todoList.length === 0 && (
            <span className="text-gray-400 mt-[10px] font-semibold font-day">
              Belum ada tugas
            </span>
          )}
        </div>
      </div>
      <Stats todoList={todoList}/>
    </main>
  );
}

export default App;
