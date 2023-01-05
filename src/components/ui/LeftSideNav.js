import {
    FaChartBar,
    FaRegMoneyBillAlt,
    FaRegUser,
    FaWpforms,
} from 'react-icons/fa';
import { MdLogout, MdOutlineDashboard } from 'react-icons/md';
import { TbClipboardList, TbUserPlus } from 'react-icons/tb';
import { AiOutlineCalculator } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const LeftSideNav = () => {
    const hr = true;
    const employee = false;
    const activeStyle =
        'flex items-center pl-8 py-2 gap-5 bg-gradient-to-r from-blue-200 to-transparent';
    const normalStyle = 'flex items-center pl-8 py-2 gap-5';

    return (
        <div className="">
            {/* Logo */}
            <div className="flex items-center justify-center">
                <h1 className="text-2xl font-bold py-2">Logo</h1>
            </div>
            {/* Links */}
            <div className="py-5 space-y-1">
                {/* Dashboard */}
                <NavLink
                    to={'/'}
                    className={({ isActive }) =>
                        isActive ? activeStyle : normalStyle
                    }
                >
                    <MdOutlineDashboard />
                    <span className="font-semibold">Dashboard</span>
                </NavLink>
                {/* Employees */}
                {hr && (
                    <NavLink
                        to={'/employees'}
                        className={({ isActive }) =>
                            isActive ? activeStyle : normalStyle
                        }
                    >
                        <FaRegUser />
                        <span className="font-semibold">Employees</span>
                    </NavLink>
                )}
                {/* Employee Profile */}
                {employee && (
                    <NavLink
                        to={'/myprofile'}
                        className={({ isActive }) =>
                            isActive ? activeStyle : normalStyle
                        }
                    >
                        <FaRegUser />
                        <span className="font-semibold">My Profile</span>
                    </NavLink>
                )}
                {/* Recruitments */}
                <NavLink
                    to={'/recruitments'}
                    className={({ isActive }) =>
                        isActive ? activeStyle : normalStyle
                    }
                >
                    <TbUserPlus />
                    <span className="font-semibold">Recruitments</span>
                </NavLink>
                {/* Attendence */}
                <NavLink
                    to={'/attendence'}
                    className={({ isActive }) =>
                        isActive ? activeStyle : normalStyle
                    }
                >
                    <TbClipboardList />
                    <span className="font-semibold">Attendence</span>
                </NavLink>
                {/* Leaves */}
                <NavLink
                    to={'/leaves'}
                    className={({ isActive }) =>
                        isActive ? activeStyle : normalStyle
                    }
                >
                    <MdLogout />
                    <span className="font-semibold">Leaves</span>
                </NavLink>
                {/* Requisition */}
                <NavLink
                    to={'/requisition'}
                    className={({ isActive }) =>
                        isActive ? activeStyle : normalStyle
                    }
                >
                    <FaWpforms />
                    <span className="font-semibold">Requisition</span>
                </NavLink>
                {hr && (
                    <>
                        {/* Payrolls */}
                        <NavLink
                            to={'/payrolls'}
                            className={({ isActive }) =>
                                isActive ? activeStyle : normalStyle
                            }
                        >
                            <FaRegMoneyBillAlt />
                            <span className="font-semibold">Payrolls</span>
                        </NavLink>
                        {/* Accounts */}
                        <NavLink
                            to={'/accounts'}
                            className={({ isActive }) =>
                                isActive ? activeStyle : normalStyle
                            }
                        >
                            <AiOutlineCalculator />
                            <span className="font-semibold">Accounts</span>
                        </NavLink>
                        {/* Reports */}
                        <NavLink
                            to={'/reports'}
                            className={({ isActive }) =>
                                isActive ? activeStyle : normalStyle
                            }
                        >
                            <FaChartBar />
                            <span className="font-semibold">Reports</span>
                        </NavLink>
                    </>
                )}
                {/* Settings */}
                <NavLink
                    to={'/settings'}
                    className={({ isActive }) =>
                        isActive ? activeStyle : normalStyle
                    }
                >
                    <FiSettings />
                    <span className="font-semibold">Settings</span>
                </NavLink>
            </div>
        </div>
    );
};

export default LeftSideNav;
