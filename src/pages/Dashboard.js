import MainContent from '../components/MainContent';
import RightSideNav from '../components/ui/RightSideNav';

const Dashboard = () => {
    return (
        <div className="grid grid-cols-7 gap-5 mx-4">
            {/* Main content */}
            <main className="col-span-5 my-4">
                <MainContent />
            </main>
            {/* Right Side Nav */}
            <div className="col-span-2 my-4">
                <RightSideNav />
            </div>
        </div>
    );
};

export default Dashboard;
