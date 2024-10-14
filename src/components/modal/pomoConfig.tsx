import { X } from "lucide-react";

interface Props {
  close: () => void;
  modeTime: { work: number; short: number; long: number };
  setModeTime: (mode: { work: number; short: number; long: number }) => void;
}
const PomodoroConfig = ({ close, setModeTime, modeTime }: Props) => {
  const formatTime = (time: number) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
  };
  return (
    <div className="w-[400px] h-auto relative p-5 flex flex-col items-center justify-between border-2 border-white bg-white rounded-xl">
      <button onClick={close} className="absolute top-2 right-2">
        <X size={30} />
      </button>
      <div className="w-full h-auto flex justify-center items-center overflow-hidden">
        <h1 className="text-3xl">Configuration</h1>
      </div>
      <div className="w-full h-auto flex flex-col gap-2">
        <label>Work: {formatTime(modeTime.work)} </label>
        <input
          type="range"
          onChange={(e) =>
            setModeTime({ ...modeTime, work: Number(e.target.value) * 15 })
          }
          value={modeTime.work / 15}
          min={1}
          max={240}
        ></input>
        <label>Short: {formatTime(modeTime.short)}</label>
        <input
          type="range"
          onChange={(e) =>
            setModeTime({ ...modeTime, short: Number(e.target.value) * 15 })
          }
          value={modeTime.short / 15}
          min={1}
          max={240}
        ></input>
        <label>Long: {formatTime(modeTime.long)}</label>
        <input
          type="range"
          onChange={(e) =>
            setModeTime({ ...modeTime, long: Number(e.target.value) * 15 })
          }
          value={modeTime.long / 15}
          min={1}
          max={240}
        ></input>
      </div>
    </div>
  );
};

export default PomodoroConfig;
