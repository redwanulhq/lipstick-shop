import React, { useEffect, useState } from "react";
import "./Header.css";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { GiLipstick } from "react-icons/gi";
import { AiOutlineLogout } from "react-icons/ai";
import { BiHome } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const { user, logOut } = useAuth();
    const [activeMenu, setActiveMenu] = useState(false);
    const [transparentHeader, setTransparentHeader] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setActiveMenu(false);
        if (location.pathname === "/" || location.pathname === "/home") setTransparentHeader(true);
        else setTransparentHeader(false);
    }, [location.pathname]);
    return (
        <div className={transparentHeader ? "header transparent" : "header"}>
            <div className="container">
                <div className="logo">Lipstick Shop</div>
                <div className="nav-toggle" onClick={() => setActiveMenu(!activeMenu)}>
                    <CgMenuRight />
                </div>
                {activeMenu && (
                    <div className="nav-menu">
                        <Link to="/" className={location.pathname === "/" && "active"}>
                            <BiHome />
                            <span>Home</span>
                        </Link>
                        <Link to="/products" className={location.pathname === "/products" && "active"}>
                            <GiLipstick />
                            <span>Products</span>
                        </Link>
                        <Link to="/dashboard" className={location.pathname === "/dashboard" && "active"}>
                            <MdOutlineDashboard />
                            <span>Dashboard</span>
                        </Link>
                        {user.email ? (
                            <Link to="/login" onClick={logOut} className="logout-btn">
                                <AiOutlineLogout />
                                <span>Log out</span>
                            </Link>
                        ) : (
                            <Link to="/login" className={location.pathname === "/login" && "active"}>
                                <IoLogIn />
                                <span>Login</span>
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
