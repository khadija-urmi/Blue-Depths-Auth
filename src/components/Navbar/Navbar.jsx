import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import ImgLogo from '../../assets/fish.png';
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className=" bg-sky-300">
            <div className=" w-11/12 mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <GiHamburgerMenu className="text-xl" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/adventures">All Adventures</NavLink>
                            <NavLink to="/profile">Profile</NavLink>
                            <NavLink to="/login">Log In</NavLink>
                        </ul>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={ImgLogo} className="w-14 h-14"></img>
                        <Link to='/' className="btn btn-ghost text-2xl text-white font-semibold">BlueDepths</Link></div>
                </div>
                <div className="navbar-center hidden lg:flex menu menu-horizontal text-lg px-1 gap-4">

                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/adventures">All Adventures</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div className="navbar-end ">
                    {user && user?.email ? (
                        <button onClick={logOut} className="btn  px-6 py-3 text-sky-500
                     bg-white rounded-lg ">
                            Log-Out
                        </button>
                    ) :
                        (
                            <NavLink className="px-6 py-3 text-sky-500
                     bg-white btn rounded-lg " to="/login">Log In</NavLink>
                        )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;