import { Clock, LayoutList, Plus } from "lucide-react";
import ButtonSBar from "../buttons/buttonSidebar";

const Sidebar = () => {
  return (
    <div className="w-[60px] h-[40%] absolute top-1/2 left-[5%] -translate-y-1/2 flex flex-col gap-10 justify-center items-center rounded-lg bg-gray-800 bg-opacity-30 backdrop-blur-sm shadow">
      <div className="w-full h-full py-3 px-2 relative flex flex-col justify-evenly items-center gap-10 ">
        <div className="flex flex-col justify-center items-center gap-2">
          <ButtonSBar>
            <Clock size={30} />
          </ButtonSBar>
          <ButtonSBar>
            <LayoutList size={30} />
          </ButtonSBar>
        </div>
        <div className="w-full h-[2px] rounded bg-black opacity-30"></div>
        <div className="flex flex-col justify-center items-center">
          <ButtonSBar>
            <Plus size={30} />
          </ButtonSBar>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
