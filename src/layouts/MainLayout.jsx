const MainLayout = ({ children }) => {
  return (
    <div className="bg-[#0a192f] w-full flex flex-col overflow-x-hidden">
      {children}
    </div>
  );
}
 
export default MainLayout;