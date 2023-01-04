import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import LeftSideNav from '../components/ui/LeftSideNav';
import Navbar from '../components/ui/Navbar';

const DashboardLayout = ({ children }) => {
    return (
        <div className="">
            {/* Left Side Nav */}

            <div className="fixed top-0 max-w-[200px] w-full">
                <div className="bg-white h-screen">
                    <LeftSideNav />
                </div>
            </div>
            <div className="">
                {/* Navbar */}
                <div className="sticky top-0 z-50 ml-[208px]">
                    <Navbar />
                </div>
                <div className="ml-[208px]">
                    <Outlet />
                    <ScrollRestoration />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
