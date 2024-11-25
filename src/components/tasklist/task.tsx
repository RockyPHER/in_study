import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ITask } from "./main";

interface Props {
  id: number;
  name: string;
  remove: (id: number) => void;
  updateTask: (newTask: ITask) => void;
}

const Task = ({ name, id, remove, updateTask }: Props) => {
  const [inputSelected, setInputSelected] = useState(true);
  const [inputValue, setInputValue] = useState(name);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focar o input
      inputRef.current.select(); // Selecionar o texto
    }
  }, []); // Executa apenas no primeiro render

  const handleEditTask = () => {
    setInputSelected(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    }, 0);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      inputRef.current?.blur(); // Força o estado de blur
      handleBlur(inputValue);
    }
  };

  const handleBlur = (taskName: string) => {
    updateTask({ id: id, name: taskName });
    setInputSelected(false);
  };

  const handleInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative w-full min-h-10 overflow-clip px-4 py-1 flex items-center border-y-[1px] border-transparent hover:border-y-[1px] hover:border-gray-300 cursor-pointer">
      <div className="w-[80%] h-full flex gap-2 justify-start items-center">
        <div className="">
          <input type="checkbox"></input>
        </div>
        <div className="w-auto h-full flex justify-center items-center">
          {inputSelected ? (
            <input
              type="text"
              ref={inputRef}
              value={inputValue}
              onKeyDown={handleKeyDown}
              onBlur={() => handleBlur(inputValue)}
              onChange={(event) => handleInputValueChange(event)}
            />
          ) : (
            <h1 onClick={handleEditTask}>{name}</h1>
          )}
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
