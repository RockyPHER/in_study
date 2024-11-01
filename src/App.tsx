import { useState } from "react";
import Sidebar from "./components/containers/sidebar/main.tsx";
import Pomodoro from "./components/pomodoro/main.tsx";
import Tasklist from "./components/tasklist/main.tsx";

function App() {
  const [mode, setMode] = useState({
    work: 25 * 60,
    short: 5 * 60,
    long: 15 * 60,
  });

  const [showPomodoro, setShowPomodoro] = useState(true);
  const [time, setTime] = useState(mode.work);

  const handlePomodoro = () => {
    setShowPomodoro(!showPomodoro);
  };

  const handleSetTime = (time: number) => {
    setTime(time);
  };
  const handleSetMode = (mode: {
    work: number;
    short: number;
    long: number;
  }) => {
    setMode(mode);
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Sidebar onClick={handlePomodoro} />
      <div className="w-full h-full flex justify-center items-center">
        <Pomodoro
          visibility={showPomodoro}
          mode={mode}
          setMode={handleSetMode}
          time={time}
          setTime={handleSetTime}
        />
      </div>
      <div className="w-full h-full px-5 absolute flex justify-end items-center top-0 left-0">
        <Tasklist />
      </div>
    </div>
  );
}

export default App;
