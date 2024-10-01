import React from "react";

interface Props {
  children: React.ReactNode;
}

const ButtonPomoTop = ({ children }: Props) => {
  return (
    <div>
      <button className="min-w-[120px] w-auto h-auto px-2 py-1 rounded-xl border border-transparent hover:border-gray-800 text-lg font-semibold">
        {children}
      </button>
    </div>
  );
};

export default ButtonPomoTop;
