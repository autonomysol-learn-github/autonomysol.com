/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Ms_1 from "../../../../images/Microsoft/mi-1.jpg";
import Addins from './Addins';
import BasicTools from './Tools';
import Whatsnew from './WhatsNew';
import BackToTop from '../../BackToTop';

const Home = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${Ms_1})`,
        //width: '100%',
        //height: '150px',
    };

    return (
        <>
            <div className='w-full'>
                <div className="bg-blue-700 flex flex-wrap justify-center">
                    <div className="mx-12 sm:rounded-lg flex flex-col md:flex-row items-center w-full bg-[#F2F2F2]">
                        <div className="xl:p-24 sm:p-12 lg:w-6/12 bg-[#F2F2F2] shadow h-full sm:w-full">
                            <h1 className='xs:text-4xl sm:text-4xl md:text-4xl xl:text-4xl font-inherit font-semibold'>Build powerful applications for Office</h1>
                            <p className='py-4 text-md font-light'>Use the Office JavaScript API to extend functionality for Word, Excel, PowerPoint, and Outlook.</p>
                            <button className="px-3 py-2 min-w-[120px] text-center rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Learn more about Office Add-ins</button>
                        </div>
                        <div className="lg:w-6/12 relative sm:w-auto sm:h-full">
                            <img src={Ms_1} alt="img" className="h-auto rounded-md" />
                        </div>
                    </div>
                </div>

                <Addins />
                <BasicTools />
                <Whatsnew />
            </div>

            <BackToTop />
        </>
    );
}

export default Home;
