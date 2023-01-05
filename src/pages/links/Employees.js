import React from 'react';
import { Link } from 'react-router-dom';

const Employees = () => {
    return (
        <div className="m-4">
            <Link
                className={
                    'py-2 px-5 bg-green-500 rounded font-semibold text-white'
                }
                to={`/employees/add`}
            >
                Add New Employee
            </Link>
        </div>
    );
};

export default Employees;
