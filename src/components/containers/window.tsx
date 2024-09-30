import ButtonWindow from "../buttons/buttonWindow";
import { Minus } from "lucide-react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const Window = ({ children, onClick }: Props) => {
  return (
    <div className="w-auto h-auto rounded overflow-hidden bg-gray-500">
      <div className="w-full h-10 flex justify-between bg-gray-700">
        <div className="flex justify-center items-center">
          <h1>Window</h1>
        </div>
        <div className="flex justify-end items-center bg-blue-600">
          <ButtonWindow onClick={onClick}>
            <Minus size={26} />
          </ButtonWindow>
        </div>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default Window;
