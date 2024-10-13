import { useState } from "react";
import Sidebar from "./components/containers/sidebar/main.tsx";
import Pomodoro from "./components/pomodoro/main.tsx";

function App() {
  const [showPomodoro, setShowPomodoro] = useState(true);

  const handlePomodoro = () => {
    setShowPomodoro(!showPomodoro);
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Sidebar onClick={handlePomodoro} />
      <div className="w-full h-full flex justify-center items-center">
        {showPomodoro && <Pomodoro />}
      </div>
    </div>
  );
}

export default App;
