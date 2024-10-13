import { useState } from "react";
import Sidebar from "./components/containers/sidebar/main.tsx";
import Pomodoro from "./components/pomodoro/main.tsx";

function App() {
  const mode = {
    work: 25 * 60,
    short: 5 * 60,
    long: 15 * 60,
  };

  const [showPomodoro, setShowPomodoro] = useState(true);
  const [time, setTime] = useState(mode.work);

  const handlePomodoro = () => {
    setShowPomodoro(!showPomodoro);
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Sidebar onClick={handlePomodoro} />
      <div className="w-full h-full flex justify-center items-center">
        {showPomodoro && <Pomodoro mode={mode} time={time} setTime={setTime} />}
      </div>
    </div>
  );
}

export default App;
