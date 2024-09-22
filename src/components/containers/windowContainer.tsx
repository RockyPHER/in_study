import { Minus, X } from "lucide-react";
import React from "react";

interface WindowProps {
  children: React.ReactNode;
  windowName: string;
}
const WindowContainer = ({ children, windowName }: WindowProps) => {
  return (
    <div>
      <div>
        <h1>{windowName}</h1>
        <div className="flex gap-2 items-center">
          <button>
            <X size={12} />
          </button>
          <button>
            <Minus size={12} />
          </button>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default WindowContainer;
