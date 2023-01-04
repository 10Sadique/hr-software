import React from 'react';
import { FaRegEdit } from 'react-icons/fa';

const EmployeeAttendence = () => {
    return (
        <div className="bg-white rounded-lg w-full">
            <h2 className="p-4 font-semibold">Attendence This Month</h2>
            {/* All Employee Daily Attendence Table */}
            <div className="w-full pb-4">
                <table className="w-full">
                    <thead className="bg-gray-300">
                        <tr className="text-left">
                            <th className="py-1 pl-5">Date</th>
                            <th className="py-1 pl-5">Place</th>
                            <th className="py-1 pl-5 ">In Time</th>
                            <th className="py-1 pl-5">Out Time</th>
                            <th className="py-1 pl-5">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        <tr className="text-left">
                            <td className="py-1 pl-5">04-1-2023</td>
                            <td className="py-1 pl-5">Head Office</td>
                            <td className="py-1 pl-5 text-green-500">
                                10:05 am
                            </td>
                            <td className="py-1 pl-5">7:05 pm</td>
                            <td className="py-1 pl-5">
                                <button>
                                    <FaRegEdit className="w-5 h-5" />
                                </button>
                            </td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-1 pl-5">03-1-2023</td>
                            <td className="py-1 pl-5">Visit</td>
                            <td className="py-1 pl-5 text-red-500">10:21 am</td>
                            <td className="py-1 pl-5 text-red-500">4:56 pm</td>
                            <td className="py-1 pl-5">
                                <button>
                                    <FaRegEdit className="w-5 h-5" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeAttendence;
