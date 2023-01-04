import plus from '../../assets/plus.png';

const EmployeeRequestCard = () => {
    const reqs = [
        'Forgot to Login Request',
        'Leave Request',
        'Requsition Request',
        'Loan Request',
        'Leave Cancellation Request',
        'Resignation',
    ];
    return (
        <div className="bg-white py-3 rounded-lg">
            <h2 className="px-3 font-bold pb-3">Requests</h2>
            <div>
                {reqs.map((item, idx) => (
                    <div
                        className="py-1.5 pl-3 odd:bg-gradient-to-r odd:from-blue-100 odd:to-transparent flex items-center gap-3 last:text-red-400"
                        key={idx}
                    >
                        <img className="w-4" src={plus} alt="plus" />
                        <span className="font-semibold">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmployeeRequestCard;
