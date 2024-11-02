interface Props {
  name: string;
}

const Task = ({ name }: Props) => {
  return (
    <div className="relative w-full min-h-10 overflow-clip px-4 py-1 flex gap-5 justify-start items-center hover:border-y-[1px] cursor-pointer">
      <div className="">
        <input type="checkbox"></input>
      </div>
      <div className="w-auto h-full flex justify-center items-center">
        <h1>{name}</h1>
      </div>
      <div className="w-auto h-full flex justify-center items-center"></div>
    </div>
  );
};

export default Task;
