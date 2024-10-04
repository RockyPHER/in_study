import { Bolt, Pause, Play, RotateCcw } from "lucide-react";
import ButtonPomoTop from "./buttonTop";
import { useState } from "react";
import ButtonPomoTime from "./buttonTime";
import Time from "./time";

const Pomodoro = () => {
  const [play, setPlay] = useState(false);
  const handlePlay = () => {
    setPlay(!play);
  };
  return (
    <div className="relative w-[500px] h-[500px] flex flex-col justify-evenly items-center select-none border-2 rounded">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-full bg-black"></div>
      <div className="w-auto h-auto justify-center items-center flex flex-col gap-8">
        <div className="w-full h-auto flex gap-2 justify-center items-center">
          <ButtonPomoTop>Work</ButtonPomoTop>
          <ButtonPomoTop>Short Break</ButtonPomoTop>
          <ButtonPomoTop>Long Break</ButtonPomoTop>
        </div>
        <div className="w-full h-auto flex justify-center items-center">
          <Time min="00" sec="00" />
        </div>
      </div>
      <div className="w-full h-auto flex gap-4 justify-center items-center">
        <ButtonPomoTime>
          <Bolt size={35} />
        </ButtonPomoTime>
        <button
          onClick={handlePlay}
          className="w-auto h-auto p-3 active:bg-slate-500 active:bg-opacity-40 active:scale-95 rounded-full border-2 border-black transition-all"
        >
          {play ? (
            <Play className="transition-all" size={60} />
          ) : (
            <Pause className="transition-all" size={60} />
          )}
        </button>
        <ButtonPomoTime>
          <RotateCcw size={35} />
        </ButtonPomoTime>
      </div>
    </div>
  );
};

export default Pomodoro;
