import plus from '../../assets/plus.png';

const HrRequestCard = () => {
    const reqs = [
        { request: 'Forgot to Login Approval', number: 5 },
        { request: 'Pending Leave Approval', number: 3 },
        { request: 'Pending Requsitions', number: 0 },
        { request: 'Leave Cancellation Request', number: 0 },
        { request: 'Resignation Request', number: 0 },
    ];
    return (
        <div className="py-3">
            <h2 className="px-3 font-bold pb-3">Requests</h2>
            <div>
                {reqs.map((item, idx) => (
                    <div
                        className="py-1.5 px-3 odd:bg-gradient-to-r odd:from-blue-100 odd:to-transparent flex items-center gap-3 "
                        key={idx}
                    >
                        <img className="w-4" src={plus} alt="plus" />
                        <span className="font-semibold flex-1">
                            {item.request}
                        </span>
                        <span className="font-semibold">({item.number})</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HrRequestCard;
