import { X } from "lucide-react";

interface Props {
  id: number;
  name: string;
  remove: (key: undefined) => void;
}

const Task = ({ name, id, remove }: Props) => {
  return (
    <div className="relative w-full min-h-10 overflow-clip px-4 py-1 flex items-center border-y-[1px] border-transparent hover:border-y-[1px] hover:border-gray-300 cursor-pointer">
      <div className="w-[80%] h-full flex gap-2 justify-start items-center">
        <div className="">
          <input type="checkbox"></input>
        </div>
        <div className="w-auto h-full flex justify-center items-center">
          <h1>{name}</h1>
        </div>
      </div>
      <div className="w-[20%] h-full flex justify-end items-center">
        <button
          className="hover:scale-110 hover:bg-red-500 hover:bg-opacity-30 active:scale-100 rounded-full transition-all"
          onClick={() => remove(id)}
        >
          <X size={25} />
        </button>
      </div>
    </div>
  );
};

export default Task;
