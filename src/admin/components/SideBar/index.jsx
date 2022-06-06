import React from "react";
import {
    HiUserGroup,
    HiCalendar,
    HiBookOpen,
    HiOutlineFolder,
} from "react-icons/hi";
import { FaPowerOff, FaUncharted, FaUserFriends, FaUserTie } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGOUT_ADMIN } from "../../../redux/types";

const SideBar = ({ open }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutAdmin = () => {
        localStorage.removeItem("adminToken");
        dispatch({ type: LOGOUT_ADMIN });
        navigate("/admin/login");
    };

    return (
        <div
            className={`${
                !open && "-translate-x-full"
            } fixed inset-y-0 left-0 bg-white w-64 transition-all z-[100]
            duration-300 ease-linear`}
        >
            <div className="flex bg-slate-900 flex-col text-lg h-full relative">
                <h2
                    className="flex items-center justify-center text-2xl
            h-16 text-white font-bold my-4"
                >
                    DASHBOARD
                </h2>

                <div className="w-full h-[2px] bg-white opacity-30" />

                <div className="links my-6 flex flex-col space-y-4 px-4">
                    <SideLink to="/admin/home" text="Home" icon={FaUncharted} />
                    <SideLink
                        to="/admin/users"
                        text="Users"
                        icon={HiUserGroup}
                    />
                    <SideLink
                        to="/admin/prayers"
                        text="Prayers"
                        icon={HiBookOpen}
                    />
                    <SideLink
                        to="/admin/sccs"
                        text="Scc Groups"
                        icon={FaUserFriends}
                    />
                    <SideLink
                        to="/admin/leaders"
                        text="Leadership"
                        icon={FaUserTie}
                    />
                    <SideLink
                        to="/admin/events"
                        text="Events"
                        icon={HiCalendar}
                    />
                    <SideLink
                        to="/admin/gallery"
                        text="Our Gallery"
                        icon={HiOutlineFolder}
                    />

                    <SideLink
                        to="/admin/about-dekut"
                        text="About Dekut"
                        icon={HiOutlineFolder}
                    />

                </div>
                <div className="absolute inset-x-0 bottom-16 flex justify-center">
                    <button
                        onClick={logoutAdmin}
                        className="flex justify-center items-center flex-col
          py-7 text-slate-300"
                    >
                        <FaPowerOff className="w-6 h-6 mb-2" />

                        <span className="text-[15px]">Log Out</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

const SideLink = ({ text, to, icon: Icon }) => {
    const { pathname } = useLocation();
    return (
        <NavLink
            to={to}
            className={`py-2 px-3 rounded-md  w-full flex items-center space-x-4 ${
                pathname === to || pathname.startsWith(to) 
                    ? "bg-white text-slate-900"
                    : "text-white opacity-70 hover:bg-slate-700 "
            } `}
        >
            <Icon className="w-6 h-6 mr-2" />
            <span className="text-[18px] tracking-wide">{text}</span>
        </NavLink>
    );
};

export default SideBar;
