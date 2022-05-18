import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { useDispatch } from "react-redux";
import { getLoggedInAdmin } from "../redux/actions/admin/adminLogin";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminDashboard = () => {

    const [sideBarOpen, setSideBarOpen] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLoggedInAdmin());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleWidthChange = (e) => {
        let width = document.body.clientWidth;
        if (width < 1240) {
            setSideBarOpen(false);
        } else {
            setSideBarOpen(true);
        }
    };

    
    useEffect(() => {
        if (document.body.clientWidth < 1240) {
            setSideBarOpen(false);
        }
        window.addEventListener("resize", handleWidthChange);

        return () => window.removeEventListener("resize", handleWidthChange);
    }, []);

    return (
        <div className="min-w-full min-h-screen  h-screen overflow-hidden bg-blue-100">
            <TopBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
            <SideBar open={sideBarOpen} />
            <main
                className={`${
                    sideBarOpen && "xl:ml-64"
                } transition-all duration-200 ease-linear pt-16`}
            >
                <div className="p-6 h-[90vh] overflow-y-auto">
                    <Outlet />
                </div>
            </main>
            <ToastContainer />
        </div>
    );
};

export default AdminDashboard;
