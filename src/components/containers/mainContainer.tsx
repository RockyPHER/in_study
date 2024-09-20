const MainContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="w-[600px] h-[400px] flex flex-col justify-center items-center backdrop-blur-sm bg-gray-200 bg-opacity-30 rounded-lg shadow-lg">
    {children}
  </div>
);

export default MainContainer;
