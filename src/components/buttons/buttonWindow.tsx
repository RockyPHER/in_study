import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void | undefined;
}
const ButtonWindow = ({ children, onClick }: ButtonProps) => {
  return (
    <div>
      <button onClick={onClick} className="w-auto h-auto p-1">
        {children}
      </button>
    </div>
  );
};

export default ButtonWindow;
