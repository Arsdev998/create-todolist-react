import React from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
const TaskItem = ({ task, deleteTask,togleCheckced }) => {
  return (
    <li className="font-day flex items-center justify-between bg-gray-600 w-ful text-[20px] text-gray-300 px-[10px] py-[9px] rounded-md">
      <div className="flex items-center gap-[10px]">
        <input type="checkbox" checked={task.checked} onChange={() => togleCheckced(task.taskName)}/>
        <p className={task.checked ? "line-through text-green-500" : ""}>{task.taskName}</p>
      </div>
      <MdOutlineDeleteSweep onClick={() => deleteTask(task.taskName)} className="hover:text-white text-[25px] rounded-full p-[3px] hover:bg-red-500" />
    </li>
  );
};

export default TaskItem;
