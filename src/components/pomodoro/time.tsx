import React from "react";

interface Props {
  min: string;
  sec: string;
}
const Time = ({ min, sec }: Props) => {
  return (
    <div className="w-full h-auto flex gap-2 justify-center items-center text-9xl">
      <h1>{min}</h1>:<h1>{sec}</h1>
    </div>
  );
};

export default Time;
