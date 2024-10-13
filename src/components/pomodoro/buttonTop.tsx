import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonPomoTop = ({ children, onClick }: Props) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="min-w-[120px] w-auto h-auto px-2 py-1 rounded-xl border hover:bg-gray-400 active:bg-gray-500 active:bg-opacity-60 text-lg"
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonPomoTop;
