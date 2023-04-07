import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import MainLayout from "./layouts/MainLayout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <MainLayout>
      <SocialLinks/>
      <Navbar/>
      <Outlet/>
    </MainLayout>
  );
}

export default App;
