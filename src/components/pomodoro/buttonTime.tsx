import React from "react";

interface Props {
  children: React.ReactNode;
}

const ButtonPomoTime = ({ children }: Props) => {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
};

export default ButtonPomoTime;
