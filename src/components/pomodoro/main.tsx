import { Bolt, Pause, Play, RotateCcw } from "lucide-react";
import ButtonPomoTop from "./buttonTop";
import { useState } from "react";

const Pomodoro = () => {
  const [play, setPlay] = useState(false);
  const handlePlay = () => {
    setPlay(!play);
  };
  return (
    <div className="w-[500px] h-[500px] flex flex-col justify-evenly items-center bg-gray-500 bg-opacity-30 rounded select-none">
      <div className="w-auto h-auto justify-center items-center flex flex-col gap-8">
        <div className="flex gap-2">
          <ButtonPomoTop>Work</ButtonPomoTop>
          <ButtonPomoTop>Short Break</ButtonPomoTop>
          <ButtonPomoTop>Long Break</ButtonPomoTop>
        </div>
        <div className="w-auto h-auto">
          <h1 className="text-9xl">00:00</h1>
        </div>
      </div>
      <div className="flex gap-1 justify-center items-center">
        <button>
          <Bolt size={35} />
        </button>
        <button onClick={handlePlay} className="w-auto h-auto">
          {play ? (
            <Play fill="black" size={60} />
          ) : (
            <Pause fill="black" size={60} />
          )}
        </button>
        <button>
          <RotateCcw size={35} />
        </button>
      </div>
    </div>
  );
};

export default Pomodoro;
