interface Props {
  time: number;
}
const Time = ({ time }: Props) => {
  const { min, sec } = {
    min: String(Math.floor(time / 60)).padStart(2, "0"),
    sec: String(time % 60).padStart(2, "0"),
  };

  return (
    <div className="w-full h-auto flex gap-2 justify-center items-center text-9xl">
      <h1>{min}</h1>:<h1>{sec}</h1>
    </div>
  );
};

export default Time;
