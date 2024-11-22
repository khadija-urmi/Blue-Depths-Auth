import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import ImgLogo from '../../assets/fish.png';
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import userImg from "../../assets/user.png";

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
                <div className="navbar-end bg-white flex items-center gap-4 rounded-l-md shadow-sm max-w-fit ml-auto h-16 px-2">
                    {user && user?.email ? (<div className="flex justify-center  gap-2 items-center" >
                        <img className="w-10 h-10 rounded-full" src={user?.photoURL} />
                        <p className="text-blue-500 font-semibold text-lg">{user.displayName}</p>
                    </div>) : (<img className="w-10 h-10 rounded-md" src={userImg} />)}
                    <div className="flex-1 h-full">
                        {user && user?.email ? (
                            <button onClick={logOut} className=" w-full h-full text-white bg-blue-500 rounded-r-lg flex items-center justify-center  px-4 py-2 ml-3 box-border">

                                Log-Out
                            </button>
                        ) :
                            (
                                <NavLink className=" w-full h-full text-white bg-blue-500 rounded-r-lg flex items-center justify-center  px-4 py-2 ml-3 box-border" to="/login">Log In</NavLink>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;