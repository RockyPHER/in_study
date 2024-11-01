interface Props {
  name: string;
}

const Task = ({ name }: Props) => {
  return (
    <div className="w-full h-12 px-4 py-2 flex gap-5 justify-start items-center border-2 rounded-xl">
      <div className="w-auto h-full flex justify-center items-center">
        <input type="checkbox"></input>
      </div>
      <div className="w-auto h-full flex justify-center items-center">
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default Task;
