import Sidebar from "./components/containers/sidebar.tsx";

// import Background from "./components/background";
function App() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Sidebar />
      <div className="w-full h-full flex justify-center items-center"></div>
    </div>
  );
}

export default App;
