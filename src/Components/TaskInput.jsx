import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");
  // console.log(task)
  function handleInputValue(e) {
    setTask(e.target.value);
  }

  function handleaddTask(e) {
    e.preventDefault();
    if (task.trim() === "") return;
    addTask(task);
    setTask("");
  }
  return (
    <form
      onSubmit={handleaddTask}
      className="flex justify-between items-center bg-[#3e3e5a] w-[100%] py-[5px] px-[10px] mt-[10px] rounded-[30px] "
    >
      <input
        className="bg-transparent p-[10px] text-white text-[16px] outline-none w-full"
        type="text"
        placeholder="Tambahkan Tugas Harian"
        value={task}
        onChange={handleInputValue}
        required
      />
      <button className="bg-blue-600 text-[10px] font-bold rounded-full py-[6px] px-[10px] text-white hover:bg-sky-600 hover:animate-spin">
        +
      </button>
    </form>
  );
};

export default TaskInput;
