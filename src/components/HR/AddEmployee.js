import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AddEmpInfoForm from '../ui/AddEmpInfoForm';
import AddressForm from '../ui/AddressForm';

const AddEmployee = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [empData, setEmpData] = useState({});
    const [addressData, setAddressData] = useState({});
    const tabCount = 6;

    const employeeInfo = {
        personalInfo: empData,
        AddressInfo: addressData,
    };

    const handleAddEmployee = (e) => {
        e.preventDefault();
        console.log(employeeInfo);
    };

    return (
        <form onSubmit={handleAddEmployee} className={'p-4'}>
            <Tabs
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
            >
                <TabList className={'flex cursor-pointer'}>
                    {/* Employee Info */}
                    <Tab className={'border-none p-3 font-bold'}>
                        Employee Info
                    </Tab>
                    {/* Address */}
                    <Tab className={'border-none p-3 font-bold'}>Address</Tab>
                    {/* Education */}
                    <Tab className={'border-none p-3 font-bold'}>Education</Tab>
                    {/* Training */}
                    <Tab className={'border-none p-3 font-bold'}>Training</Tab>
                    {/* Contact */}
                    <Tab className={'border-none p-3 font-bold'}>Contact</Tab>
                    {/* Prev Emp Info */}
                    <Tab className={'border-none p-3 font-bold'}>
                        Previous Employment Info
                    </Tab>
                </TabList>
                {/* Employee Info */}
                <TabPanel>
                    <AddEmpInfoForm empData={empData} setEmpData={setEmpData} />
                </TabPanel>
                {/* Address Info */}
                <TabPanel>
                    <AddressForm
                        addressData={addressData}
                        setAddressData={setAddressData}
                    />
                </TabPanel>
                <TabPanel>Hollo 2</TabPanel>
                <TabPanel>Hollo 2</TabPanel>
                <TabPanel>Hollo 2</TabPanel>
                <TabPanel>Hollo 2</TabPanel>
            </Tabs>
            {/* form actions */}
            <div className={'flex items-center justify-between'}>
                {/* Tab navigation */}
                <div className={'space-x-2 my-5'}>
                    {/* Previous button */}
                    <button
                        className="py-2 px-5 font-semibold rounded bg-gray-500 text-white"
                        onClick={(e) => {
                            e.preventDefault();
                            setTabIndex((tabIndex + tabCount - 1) % tabCount);
                        }}
                    >
                        Back
                    </button>
                    {/* Next button */}
                    <button
                        className="py-2 px-5 font-semibold rounded bg-blue-500 text-white"
                        onClick={(e) => {
                            e.preventDefault();
                            setTabIndex((tabIndex + 1) % tabCount);
                        }}
                    >
                        Next
                    </button>
                </div>
                {/* Form actions */}
                <div className={'space-x-2'}>
                    <button
                        type="submit"
                        className={
                            'py-2 px-5 rounded bg-green-500 font-semibold text-white'
                        }
                    >
                        Add Employee
                    </button>
                    <button
                        className={
                            'py-2 px-5 rounded bg-red-500 font-semibold text-white'
                        }
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddEmployee;
