const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <button className="bg-gray-300 bg-opacity-40 active:bg-grey-600 active:bg-opacity-30 hover:bg-white hover:bg-opacity-50 px-3 py-1 rounded text-white">
        {children}
      </button>
    </div>
  );
};

export default Button;
