import { Plus } from "lucide-react";
import Task from "./task";
import { useState } from "react";

interface ITask {
  id: number;
  name: string;
}

const Tasklist = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const addTask = () => {
    const newTask: ITask = {
      id: Math.floor(Math.random() * Date.now()),
      name: "Task",
    };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (key: undefined) => {
    setTasks(tasks.filter((task) => task.id !== key));
  };

  return (
    <div className="relative w-[340px] h-[560px] flex flex-col border-2 bg-transparent rounded-xl overflow-hidden">
      <div className="w-full h-10 py-7 flex justify-center items-center">
        <h1 className="text-2xl">Tasks</h1>
      </div>
      <div className="flex flex-col h-full justify-between">
        <div className="flex h-auto px-2 flex-col">
          <div className="w-full h-[430px] flex flex-col overflow-y-scroll no-scrollbar">
            {tasks &&
              tasks.map((task, order) => (
                <Task
                  id={task.id}
                  name={task.name}
                  remove={removeTask}
                  key={order}
                />
              ))}
          </div>
        </div>
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
