import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import NavMenu from "../Pages/Shared/Navbar";

const Main = () => {
    return (
        <div>
            <NavMenu />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;