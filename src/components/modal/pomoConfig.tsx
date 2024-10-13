import { X } from "lucide-react";

interface Props {
  close: () => void;
}
const PomodoroConfig = ({ close }: Props) => {
  return (
    <div className="w-[400px] h-auto relative p-5 flex flex-col items-center justify-between border-2 border-white bg-white bg-opacity-40 rounded-xl">
      <button onClick={close} className="absolute top-2 right-2">
        <X size={30} />
      </button>
      <div className="w-full h-auto flex justify-center items-center overflow-hidden">
        <h1 className="text-3xl">Configuration</h1>
      </div>
      <div className="w-full h-auto flex flex-col gap-2">
        <label>Work:</label>
        <input type="range"></input>
        <label>Short:</label>
        <input type="range"></input>
        <label>Long:</label>
        <input type="range"></input>
      </div>
    </div>
  );
};

export default PomodoroConfig;
