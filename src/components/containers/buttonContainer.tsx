const ButtonContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-min bg-black bg-opacity-30 rounded flex p-10 gap-3">
      {children}
    </div>
  );
};

export default ButtonContainer;
