import { Plus } from "lucide-react";
import Task from "./task";
import { useState } from "react";

interface TaskListProps {
  visibility: boolean;
}

export interface ITask {
  id: number;
  name: string;
}

const TaskList = ({ visibility }: TaskListProps) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const addTask = () => {
    const newTask = {
      id: Math.floor(Math.random() * Date.now()),
      name: "Task",
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (newTask: ITask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === newTask.id ? newTask : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div
      style={{
        display: visibility ? "flex" : "none",
      }}
      className="absolute top-1/2 -translate-y-1/2 right-5 w-[340px] h-[560px] flex flex-col border-2 bg-transparent rounded-xl overflow-hidden"
    >
      <div className="w-full h-10 py-7 flex justify-center items-center">
        <h1 className="text-2xl">Tasks</h1>
      </div>
      <div className="flex flex-col h-full justify-between">
        <div className="flex h-auto px-2 flex-col">
          <div className="w-full h-[430px] flex flex-col overflow-y-scroll no-scrollbar">
            {tasks.map((task) => (
              <Task
                id={task.id}
                name={task.name}
                remove={removeTask}
                updateTask={updateTask}
                key={task.id}
              />
            ))}
          </div>
        </div>
        <div className="w-full h-16 flex justify-center items-center">
          <button
            onClick={addTask}
            className="w-full h-full flex justify-center items-center hover:bg-gray-500 hover:bg-opacity-30 active:bg-gray-600 active:bg-opacity-30 transition-all"
          >
            <Plus size={36} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
