import React from "react";

interface Props {
  children: React.ReactNode;
}
const Modal = ({ children }: Props) => {
  return (
    <div className="w-screen h-screen z-20 absolute flex justify-center items-center bg-black bg-opacity-50 animated transition-all">
      {children}
    </div>
  );
};

export default Modal;
