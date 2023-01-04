import React from 'react';

const LeaveCard = () => {
    return (
        <div className="bg-white p-3 rounded-lg">
            <h2 className="text-red-400 font-bold mb-3">Employees on Leave</h2>
            <div className="space-y-3">
                <div className="grid grid-cols-4 gap-3">
                    <div className="col-span-1 w-full flex items-center justify-center">
                        <img
                            className="w-12"
                            src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"
                            alt=""
                        />
                    </div>
                    <div className="col-span-3">
                        {/* Name */}
                        <p className="font-bold">Reyan Ahmed</p>
                        {/* Cause */}
                        <p className="font-semibold text-gray-400 text-sm">
                            Sick Leave
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-3">
                    <div className="col-span-1 w-full flex items-center justify-center">
                        <img
                            className="w-12"
                            src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"
                            alt=""
                        />
                    </div>
                    <div className="col-span-3">
                        {/* Name */}
                        <p className="font-bold">Nowshin Tabassum</p>
                        {/* Cause */}
                        <p className="font-semibold text-gray-400 text-sm">
                            Casual Leave
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeaveCard;
