import { useState } from "react";
import Window from "./components/containers/window.tsx";
import Sidebar from "./components/sidebar.tsx";

function App() {
  const [window, setWindow] = useState(false);

  const handleWindow = () => {
    setWindow(!window);
  };

  const closeWindow = () => {
    setWindow(false);
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Sidebar onClick={handleWindow} />
      <div className="w-full h-full flex justify-center items-center">
        {window && <Window onClick={closeWindow}>test</Window>}
      </div>
    </div>
  );
}

export default App;
