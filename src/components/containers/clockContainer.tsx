const ClockContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[360px] h-[160px] bg-gray-200 bg-opacity-30 rounded-lg shadow-lg flex ">
      {children}
    </div>
  );
};

export default ClockContainer;
