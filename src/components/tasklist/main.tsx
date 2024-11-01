import { Plus } from "lucide-react";
import Task from "./task";

const Tasklist = () => {
  return (
    <div className="relative w-[340px] h-[560px] border-2 bg-transparent rounded-xl">
      <div className="w-full h-10 flex justify-center items-center">
        <h1>Tasks</h1>
      </div>
      <div className="flex p-2">
        <Task name="test" />
      </div>
      <div className="w-full h-auto flex justify-center items-center">
        <button>
          <Plus size={30} />
        </button>
      </div>
    </div>
  );
};

export default Tasklist;
