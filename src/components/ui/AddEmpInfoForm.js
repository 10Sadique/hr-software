import React from 'react';

const AddEmpInfoForm = ({ empData, setEmpData }) => {
    return (
        <div
            className={
                'bg-white p-4 rounded-b-md rounded-r-md grid grid-cols-2 gap-4'
            }
        >
            {/* Emp Number */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Employee Number</span>
                </label>
                <input
                    className="bg-gray-100 w-full p-2 rounded-md focus:outline-none input"
                    type="text"
                    name="empNumber"
                    id="empNumber"
                    placeholder="Employee Number"
                    onChange={(e) =>
                        setEmpData({
                            ...empData,
                            empNumber: e.target.value,
                        })
                    }
                    defaultValue={empData.empNumber ? empData.empNumber : ''}
                />
            </div>
            {/* Title */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Title</span>
                </label>
                <input
                    className="bg-gray-100 w-full p-2 rounded-md focus:outline-none input"
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    onChange={(e) =>
                        setEmpData({
                            ...empData,
                            title: e.target.value,
                        })
                    }
                    defaultValue={empData.title ? empData.title : ''}
                />
            </div>
            {/* first name */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">First Name</span>
                </label>
                <input
                    className="bg-gray-100 w-full p-2 rounded-md focus:outline-none input"
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    onChange={(e) =>
                        setEmpData({
                            ...empData,
                            firstName: e.target.value,
                        })
                    }
                    defaultValue={empData.firstName ? empData.firstName : ''}
                />
            </div>
            {/* last name */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Last Name</span>
                </label>
                <input
                    className="bg-gray-100 w-full p-2 rounded-md focus:outline-none input"
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    onChange={(e) =>
                        setEmpData({
                            ...empData,
                            lastName: e.target.value,
                        })
                    }
                    defaultValue={empData.lastName ? empData.lastName : ''}
                />
            </div>
            {/* gender */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Gender</span>
                </label>
                <select
                    className="bg-gray-100 w-full py-1.5 rounded-md focus:outline-none select"
                    type="text"
                    name="gender"
                    id="gender"
                    placeholder="Gender"
                    onChange={(e) =>
                        setEmpData({
                            ...empData,
                            gender: e.target.value,
                        })
                    }
                    defaultValue={
                        empData.gender ? empData.gender : 'Select Gender'
                    }
                >
                    {/* <option disabled>Select gender</option> */}
                    <option>None Selected</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
            {/* person type */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Person Type</span>
                </label>
                <select
                    className="bg-gray-100 w-full py-1.5 rounded-md focus:outline-none select"
                    type="text"
                    name="personType"
                    id="personType"
                    placeholder="Gender"
                    onChange={(e) =>
                        setEmpData({
                            ...empData,
                            personType: e.target.value,
                        })
                    }
                    defaultValue={
                        empData.personType
                            ? empData.personType
                            : 'Select Person Type'
                    }
                >
                    {/* <option disabled>Select gender</option> */}
                    <option>None Selected</option>
                    <option>Type 1</option>
                    <option>Type 2</option>
                </select>
            </div>
            {/* nid */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">National Identifier</span>
                </label>
                <input
                    className="bg-gray-100 w-full p-2 rounded-md focus:outline-none input"
                    type="text"
                    name="nid"
                    id="nid"
                    placeholder="National Identifier"
                    onChange={(e) =>
                        setEmpData({
                            ...empData,
                            nid: e.target.value,
                        })
                    }
                    defaultValue={empData.nid ? empData.nid : ''}
                />
            </div>
            {/* date of birth - in yyyy/mm/dd */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Date of Birth</span>
                </label>
                <input
                    className="bg-gray-100 w-full p-2 rounded-md focus:outline-none input"
                    type="date"
                    name="birthDate"
                    id="birthDate"
                    placeholder="Date of Birth"
                    onChange={(e) =>
                        setEmpData({
                            ...empData,
                            birthDate: e.target.value,
                        })
                    }
                    defaultValue={empData.birthDate ? empData.birthDate : ''}
                />
            </div>
            {/* Town of Birth */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Town of Birth</span>
                </label>
                <select
                    className="bg-gray-100 w-full py-1.5 rounded-md focus:outline-none select"
                    type="text"
                    name="birthTown"
                    id="birthTown"
                    placeholder="Town of Birth"
                    onChange={(e) =>
                        setEmpData({
                            ...empData,
                            birthTown: e.target.value,
                        })
                    }
                    defaultValue={
                        empData.birthTown
                            ? empData.birthTown
                            : 'Select Town of Birth'
                    }
                >
                    <option>None Selected</option>
                    <option>Dhaka</option>
                    <option>Cumilla</option>
                    <option>Chittagong</option>
                </select>
            </div>
            {/* Country of Birth */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Country of Birth</span>
                </label>
                <select
                    className="bg-gray-100 w-full py-1.5 rounded-md focus:outline-none select"
                    type="text"
                    name="birthCountry"
                    id="birthCountry"
                    placeholder="Country of Birth"
                    onChange={(e) =>
                        setEmpData({
                            ...empData,
                            birthCountry: e.target.value,
                        })
                    }
                    defaultValue={
                        empData.birthCountry
                            ? empData.birthCountry
                            : 'Select Country of Birth'
                    }
                >
                    <option>None Selected</option>
                    <option>Bangladesh</option>
                    <option>USA</option>
                    <option>India</option>
                </select>
            </div>
            {/* Marital Status */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Marital Status</span>
                </label>
                <select
                    className="bg-gray-100 w-full py-1.5 rounded-md focus:outline-none select"
                    type="text"
                    name="maritialStatus"
                    id="maritialStatus"
                    placeholder="Gender"
                    onChange={(e) =>
                        setEmpData({
                            ...empData,
                            maritialStatus: e.target.value,
                        })
                    }
                    defaultValue={
                        empData.maritialStatus
                            ? empData.maritialStatus
                            : 'Select Marital Status'
                    }
                >
                    <option>None Selected</option>
                    <option>Unmarried</option>
                    <option>Married</option>
                    <option>Divorced</option>
                </select>
            </div>
            {/* Nationality */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Nationality</span>
                </label>
                <select
                    className="bg-gray-100 w-full py-1.5 rounded-md focus:outline-none select"
                    type="text"
                    name="nationality"
                    id="nationality"
                    placeholder="Nationality"
                    onChange={(e) =>
                        setEmpData({
                            ...empData,
                            nationality: e.target.value,
                        })
                    }
                    defaultValue={
                        empData.nationality
                            ? empData.nationality
                            : 'Select Nationality'
                    }
                >
                    <option>None Selected</option>
                    <option>Bangladeshi</option>
                    <option>American</option>
                    <option>Indian</option>
                </select>
            </div>
            {/* Registered Disabled */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Registered Disabled</span>
                </label>
                <select
                    className="bg-gray-100 w-full py-1.5 rounded-md focus:outline-none select"
                    type="text"
                    name="disabled"
                    id="disabled"
                    placeholder="Registered Disabled"
                    onChange={(e) =>
                        setEmpData({
                            ...empData,
                            disabled: e.target.value,
                        })
                    }
                    defaultValue={
                        empData.disabled
                            ? empData.disabled
                            : 'Select Registered Disabled'
                    }
                >
                    <option>None Selected</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div>
            {/* Join Date */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Join Date</span>
                </label>
                <input
                    className="bg-gray-100 w-full p-2 rounded-md focus:outline-none input"
                    type="date"
                    name="joinDate"
                    id="joinDate"
                    placeholder="Join Date"
                    onChange={(e) =>
                        setEmpData({
                            ...empData,
                            joinDate: e.target.value,
                        })
                    }
                    defaultValue={empData.joinDate ? empData.joinDate : ''}
                />
            </div>
        </div>
    );
};

export default AddEmpInfoForm;
