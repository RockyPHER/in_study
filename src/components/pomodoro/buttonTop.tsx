import React from "react";

interface Props {
  children: React.ReactNode;
}

const ButtonPomoTop = ({ children }: Props) => {
  return (
    <div>
      <button className="min-w-[120px] w-auto h-auto px-2 py-1 rounded-xl border hover:bg-gray-400 active:bg-gray-500 active:bg-opacity-60 text-lg">
        {children}
      </button>
    </div>
  );
};

export default ButtonPomoTop;
