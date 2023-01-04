import vacation from '../../assets/vacation.png';

const VacationCard = () => {
    return (
        <div className="bg-white rounded-lg p-3 grid grid-cols-4 gap-3">
            <div className="col-span-1">
                <img src={vacation} alt="celebrate" />
            </div>
            <div className="col-span-3">
                <h2 className="text-sm font-medium">Upcoming Holidays</h2>
                <div className="text-red-400 font-semibold">
                    <h2 className="font-bold ">Eid Vacation(4days)</h2>
                    <p className="text-gray-500 text-sm">14 July - 18 July</p>
                </div>
            </div>
        </div>
    );
};

export default VacationCard;
