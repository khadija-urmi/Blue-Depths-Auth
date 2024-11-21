import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import DynamicTitle from "../components/DynamicTitle/DynamicTitle";


const MainLayout = () => {
    return (
        <div>
            <DynamicTitle />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;