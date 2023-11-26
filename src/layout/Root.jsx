import { Outlet } from "react-router-dom";
import MenuBar from "../Pages/Shared/MenuBar/MenuBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Root = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col">
      <MenuBar></MenuBar>
      <div className="flex-grow">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
