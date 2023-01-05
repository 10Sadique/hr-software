import { createBrowserRouter } from 'react-router-dom';
import AddEmployee from '../components/HR/AddEmployee';
import DashboardLayout from '../layout/DashboardLayout';
import Dashboard from '../pages/Dashboard';
import Accounts from '../pages/links/Accounts';
import Attendence from '../pages/links/Attendence';
import EmployeeProfile from '../pages/links/EmployeeProfile';
import Employees from '../pages/links/Employees';
import Leaves from '../pages/links/Leaves';
import Payrolls from '../pages/links/Payrolls';
import Recruitments from '../pages/links/Recruitments';
import Reports from '../pages/links/Reports';
import Requisition from '../pages/links/Requisition';
import Settings from '../pages/links/Settings';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            { path: '/', element: <Dashboard /> },
            { path: '/employees', element: <Employees /> },
            { path: '/recruitments', element: <Recruitments /> },
            { path: '/attendence', element: <Attendence /> },
            { path: '/leaves', element: <Leaves /> },
            { path: '/requisition', element: <Requisition /> },
            { path: '/payrolls', element: <Payrolls /> },
            { path: '/accounts', element: <Accounts /> },
            { path: '/reports', element: <Reports /> },
            { path: '/settings', element: <Settings /> },
            { path: '/myprofile', element: <EmployeeProfile /> },
            { path: '/employees/add', element: <AddEmployee /> },
        ],
    },
]);
