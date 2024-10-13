import { Bolt, Pause, Play, RotateCcw } from "lucide-react";
import ButtonPomoTop from "./buttonTop";
import { useEffect, useState } from "react";
import ButtonPomoTime from "./buttonTime";
import Time from "./time";
import Modal from "../modal/modal";
import PomodoroConfig from "../modal/pomoConfig";

const Pomodoro = () => {
  const [openConfig, setOpenConfig] = useState(false);

  const mode = {
    work: 25 * 60,
    short: 5 * 60,
    long: 15 * 60,
  };

  const [time, setTime] = useState(mode.work);
  const [play, setPlay] = useState(false);
  const [currentMode, setCurrentMode] = useState("work");

  const handlePlay = () => {
    if (time === 0) return;
    setPlay(!play);
  };

  const handleReset = () => {
    setPlay(false);
    setTime(mode[currentMode as keyof typeof mode]);
  };

  const handleModeChange = (newMode: string) => {
    setPlay(false);
    setCurrentMode(newMode);
    setTime(mode[newMode as keyof typeof mode]);
  };

  const handleOpenConfig = () => {
    setOpenConfig(!openConfig);
  };

  useEffect(() => {
    if (play) {
      const interval = setInterval(() => {
        if (time - 1 === 0) setPlay(false);

        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  });

  return (
    <div className="relative w-[500px] h-[500px] flex flex-col justify-evenly items-center select-none border-2 rounded">
      {openConfig && (
        <Modal>
          <PomodoroConfig close={() => handleOpenConfig()} />
        </Modal>
      )}
      <div className="w-auto h-auto justify-center items-center flex flex-col gap-8">
        <div className="w-full h-auto flex gap-2 justify-center items-center">
          <ButtonPomoTop onClick={() => handleModeChange("work")}>
            Work
          </ButtonPomoTop>
          <ButtonPomoTop onClick={() => handleModeChange("short")}>
            Short Break
          </ButtonPomoTop>
          <ButtonPomoTop onClick={() => handleModeChange("long")}>
            Long Break
          </ButtonPomoTop>
        </div>
        <div className="w-full h-auto flex justify-center items-center">
          <Time time={time} />
        </div>
      </div>
      <div className="w-full h-auto flex gap-4 justify-center items-center">
        <ButtonPomoTime onClick={() => handleOpenConfig()}>
          <Bolt size={35} />
        </ButtonPomoTime>
        <button
          onClick={handlePlay}
          className="w-auto h-auto p-3 active:bg-slate-500 active:bg-opacity-40 active:scale-95 rounded-full border-2 border-black transition-all"
        >
          {play ? (
            <Pause className="transition-all" size={60} />
          ) : (
            <Play className="transition-all" size={60} />
          )}
        </button>
        <ButtonPomoTime onClick={() => handleReset()}>
          <RotateCcw size={35} />
        </ButtonPomoTime>
      </div>
    </div>
  );
};

export default Pomodoro;
