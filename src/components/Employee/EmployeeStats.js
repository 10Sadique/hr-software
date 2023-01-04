import React from 'react';

const EmployeeStats = () => {
    return (
        <div className="py-4">
            <h2 className="px-4 font-bold pb-4">My Stats</h2>
            <div className="p-4">
                {/* top part */}
                <div className="grid grid-cols-3 divide-x-2  mb-3 ">
                    <div className=" px-2">
                        <p className="font-semibold text-xs">Leave Taken</p>
                        <p className="text-2xl">5</p>
                    </div>
                    <div className=" px-2">
                        <p className="font-semibold text-xs">Leave Remains</p>
                        <p className="text-2xl text-red-500 ">16</p>
                    </div>
                    <div className=" px-2">
                        <p className="font-semibold text-xs">On Visit</p>
                        <p className="text-2xl">4</p>
                    </div>
                </div>
                <div className="h-[2px] bg-gray-200 my-4"></div>
                {/* bottom part */}
                <div className="grid grid-cols-3 divide-x-2  mt-3">
                    <div className=" px-2">
                        <p className="font-semibold text-xs">Late Login</p>
                        <p className="text-2xl">5</p>
                    </div>
                    <div className=" px-2">
                        <p className="font-semibold text-xs">Home Office</p>
                        <p className="text-2xl">8</p>
                    </div>
                    <div className=" px-2">
                        <p className="font-semibold text-xs">On Leave</p>
                        <p className="text-2xl text-red-500">2</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeStats;
