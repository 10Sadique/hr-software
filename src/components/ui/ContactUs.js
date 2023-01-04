import help from '../../assets/help.png';

const ContactUs = () => {
    return (
        <div className="p-3 bg-white rounded-lg">
            <div className="w-full">
                <img className="w-full" src={help} alt="" />
            </div>
            <div>
                <h2 className="font-bold">Need Help?</h2>
                <p className="text-sm font-medium text-gray-500 mb-3">
                    Are you facing any problem using RevHR Platform?
                </p>
                <button className="py-1 px-5 font-semibold bg-blue-700 text-white rounded">
                    Contact Us
                </button>
            </div>
        </div>
    );
};

export default ContactUs;
