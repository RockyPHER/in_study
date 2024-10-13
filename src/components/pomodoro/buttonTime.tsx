import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonPomoTime = ({ children, onClick }: Props) => {
  const [rotationCount, setRotationCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    onClick?.();
    setRotationCount((prevCount) => prevCount + 1);
    animation();
  };
  const animation = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          transform: `rotate(${rotationCount * -360}deg) scale(${
            isClicked ? 1.1 : 1
          })`, // Sempre gira -360 graus por clique
          transition: "transform 0.5s ease-in-out",
        }}
        className="w-auto h-auto p-2 rounded-full"
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonPomoTime;
