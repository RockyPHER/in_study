import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void | undefined;
}

const ButtonSideBar = ({ children, onClick }: ButtonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="w-auto h-auto p-2 rounded-full text-gray-100 hover:bg-gray-500 hover:bg-opacity-35 hover:scale-105 active:bg-gray-600 active:bg-opacity-30 active:scale-95 transition-all"
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonSideBar;
