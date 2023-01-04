import { AiOutlineLogout } from 'react-icons/ai';
import { IoAddCircleOutline } from 'react-icons/io5';
import EmployeeAttendence from './Employee/EmployeeAttendence';
import EmployeeStats from './Employee/EmployeeStats';
import DailyAttendence from './HR/DailyAttendence';
import HrRequestCard from './HR/HrRequestCard';

const MainContent = () => {
    const hr = false;
    const employee = true;
    return (
        <div className="space-y-4">
            {/* Greetings */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-semibold mb-2">
                        Welcome Meer Ali Reja!
                    </h2>
                    <p className="font-medium text-gray-500">
                        Next payday in 15 days.
                    </p>
                </div>
                {hr && (
                    <button className="flex items-center gap-3 text-white bg-blue-600 py-2 px-4 rounded-xl hover:bg-blue-500 ease duration-300 transition-all">
                        <IoAddCircleOutline className="text-white h-10 w-10" />
                        <span className="">Add Notice</span>
                    </button>
                )}
            </div>
            {/* Shortcuts */}
            <div className="grid grid-cols-2 gap-4">
                {/* Attendence */}
                <div className="bg-white rounded-lg">
                    {hr && (
                        <h2 className="p-4 font-semibold">Self Attendence</h2>
                    )}
                    {employee && (
                        <h2 className="p-4 font-semibold">
                            Today's Attendence
                        </h2>
                    )}
                    <div className="text-center py-5 bg-gradient-to-r from-green-100 to-transparent">
                        <h2 className="text-2xl font-bold">9:50am</h2>
                        <p className="text-sm font-medium text-gray-500">
                            Today's Attendence in time(Head Office)
                        </p>
                    </div>
                    <div className="py-5 flex items-center justify-center gap-3 flex-col">
                        <button className="flex items-center gap-3 text-white bg-red-600 py-2 px-4 rounded-xl hover:bg-red-500 ease duration-300 transition-all">
                            <AiOutlineLogout className="text-white h-10 w-10" />
                            <span className="uppercase">Sign Out</span>
                        </button>
                        <p className="text-sm font-medium text-gray-500">
                            Regular signout time is 6:00 pm.
                        </p>
                    </div>
                </div>
                {/* Requests - HR View */}
                {hr && (
                    <div className="bg-white rounded-lg">
                        <HrRequestCard />
                    </div>
                )}
                {/* Employee Stats - Employee View */}
                {employee && (
                    <div className="bg-white rounded-lg h-max">
                        <EmployeeStats />
                    </div>
                )}
            </div>
            {/* Attendence Sheet */}
            {hr && <DailyAttendence />}
            {employee && <EmployeeAttendence />}
        </div>
    );
};

export default MainContent;
