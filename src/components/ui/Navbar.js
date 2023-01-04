import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {
    return (
        <div className="h-[54px] bg-white rounded-md">
            <div className="flex items-center">
                {/* Search Input */}
                <div className="flex-1 px-5">
                    <div className="flex items-center bg-gray-100 w-[60%] gap-2 rounded-md px-3">
                        <BiSearchAlt className="h-4 w-4" />
                        <input
                            className="bg-gray-100 w-full p-1.5 focus:outline-none"
                            type="text"
                            name=""
                            id=""
                            placeholder="Search for employee..."
                        />
                    </div>
                </div>
                {/* Notifications */}
                <div className="w-auto p-3 border-l border-r relative">
                    <IoNotificationsOutline className="h-7 w-7" />
                    <span className="w-4 h-4 flex items-center justify-center absolute top-2 right-2.5 border-red-500 border-2 text-white font-semibold rounded-full text-xs bg-red-500">
                        1
                    </span>
                </div>
                {/* User Profile Avatar */}
                <div className="w-auto flex items-center gap-5 px-5">
                    <div className="avatar">
                        <div className="w-8 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                            <img
                                src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"
                                alt=""
                            />
                        </div>
                    </div>
                    {/* Dropdown menu */}
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="cursor-pointer flex items-center gap-3"
                        >
                            <span className="font-bold">Meer Ali Reja</span>{' '}
                            <IoIosArrowDown className="h-7" />
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow bg-gray-100 rounded-box w-52"
                        >
                            <li>
                                <span>Item 1</span>
                            </li>
                            <li>
                                <span>Item 2</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
