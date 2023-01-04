import React from 'react';
import BirthdayCard from './BirthdayCard';
import ContactUs from './ContactUs';
import EmployeeRequestCard from '../Employee/EmployeeRequestCard';
import HrStats from '../HR/HrStats';
import LeaveCard from '../HR/LeaveCard';
import VacationCard from '../Employee/VacationCard';

const RightSideNav = () => {
    const hr = false;
    const employee = true;
    return (
        <div className="space-y-3">
            {employee && <VacationCard />}
            {employee && <EmployeeRequestCard />}
            {hr && <HrStats />}
            <BirthdayCard />
            {hr && <LeaveCard />}
            <ContactUs />
        </div>
    );
};

export default RightSideNav;
