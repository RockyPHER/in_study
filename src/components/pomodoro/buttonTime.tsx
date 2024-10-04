import React from "react";

interface Props {
  children: React.ReactNode;
}

const ButtonPomoTime = ({ children }: Props) => {
  return (
    <div>
      <button className="w-auto h-auto active:scale-90 transition-all p-2 rounded-full">
        {children}
      </button>
    </div>
  );
};

export default ButtonPomoTime;
