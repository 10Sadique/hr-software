import celebrate from '../../assets/celebration.png';

const BirthdayCard = () => {
    return (
        <div className="bg-white rounded-lg p-3 grid grid-cols-4 gap-3">
            <div className="col-span-1">
                <img src={celebrate} alt="celebrate" />
            </div>
            <div className="col-span-3">
                <h2 className="text-sm font-medium">Birthday Today</h2>
                <div className="text-red-400 font-semibold">
                    <p>Abeda Sultana,</p>
                    <p>Papri Akter</p>
                </div>
            </div>
        </div>
    );
};

export default BirthdayCard;
