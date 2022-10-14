import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from './sideBar/Sidebar';
const Layout = () => {
    return (
      <div className="flex flex-col justify-between items-center h-screen w-full px-1 py-1">
        <Header />
        <Outlet />
        <Footer />
        <Sidebar />
       </div>
    );
};
export default Layout;
