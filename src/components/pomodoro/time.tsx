interface Props {
  time: number;
}
const Time = ({ time }: Props) => {
  const { min, sec } = {
    min: String(Math.floor(time / 60)).padStart(2, "0"),
    sec: String(time % 60).padStart(2, "0"),
  };

  return (
    <div className="w-full h-auto flex gap-1 justify-center items-center text-9xl ">
      <h1 className="w-5/6 flex">
        <p className="w-1/3 flex gap-6 justify-center items-center">
          <p className="w-1/2 flex justify-center">{min[0]}</p>
          <p className="w-1/2 flex justify-center"> {min[1]}</p>
        </p>
        <p className="w-1/3 flex justify-center">:</p>
        <p className="w-1/3 flex gap-6 justify-center items-center">
          <p className="w-1/2 flex justify-center">{sec[0]}</p>
          <p className="w-1/2 flex justify-center">{sec[1]}</p>
        </p>
      </h1>
    </div>
  );
};

export default Time;
