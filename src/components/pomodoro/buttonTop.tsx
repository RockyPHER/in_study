import React from "react";

interface Props {
  children: React.ReactNode;
}

const ButtonPomoTop = ({ children }: Props) => {
  return (
    <div>
      <button className="w-[120px] h-[35px] bg-white rounded-xl border border-black">
        {children}
      </button>
    </div>
  );
};

export default ButtonPomoTop;
