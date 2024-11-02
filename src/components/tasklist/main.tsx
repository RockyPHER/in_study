import { Plus } from "lucide-react";
import Task from "./task";
import { useState } from "react";

const Tasklist = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    setTasks([...tasks, "Task"]);
  };

  return (
    <div className="relative w-[340px] h-[560px] flex flex-col justify-between border-2 bg-transparent rounded-xl overflow-hidden">
      <div className="w-full h-10 py-7 flex justify-center items-center">
        <h1 className="text-2xl">Tasks</h1>
      </div>
      <div className="flex h-auto px-2 flex-col overflow-y-scroll overflow">
        {tasks && tasks.map((task) => <Task key={task} name={task} />)}
        <div className="w-full h-16 flex justify-center items-center">
          <button
            onClick={() => addTask()}
            className="w-full h-full flex justify-center items-center hover:bg-gray-500 hover:bg-opacity-30 active:bg-gray-600 active:bg-opacity-30 transition-all"
          >
            <Plus size={36} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tasklist;
