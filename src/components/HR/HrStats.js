import React from 'react';

const HrStats = () => {
    return (
        <div className="p-3 bg-white rounded-lg">
            {/* top part */}
            <div className="grid grid-cols-3 divide-x-2  my-1">
                <div className=" px-2">
                    <p className="font-semibold text-xs">Attendence</p>
                    <p className="text-2xl">35</p>
                </div>
                <div className=" px-2">
                    <p className="font-semibold text-xs">Late</p>
                    <p className="text-2xl text-red-500 ">6</p>
                </div>
                <div className=" px-2">
                    <p className="font-semibold text-xs">Absent</p>
                    <p className="text-2xl">4</p>
                </div>
            </div>
            <div className="h-[2px] bg-gray-200 my-2"></div>
            {/* bottom part */}
            <div className="grid grid-cols-3 divide-x-2  my-1">
                <div className=" px-2">
                    <p className="font-semibold text-xs">On Visit</p>
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
    );
};

export default HrStats;
