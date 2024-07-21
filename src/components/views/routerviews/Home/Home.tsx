/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Ms_1 from "../../../../images/Microsoft/mi-1.jpg";
import Addins from './Addins';
import BasicTools from './Tools';
import Whatsnew from './WhatsNew';
import BackToTop from '../../BackToTop';
import Contact from '../Contact/Contact';
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
    return (
        <>
<<<<<<< HEAD
            <div className='w-full mb-6'>
                <div className="bg-[#006DC1] h-auto md:h-96 lg:h-full flex flex-wrap justify-center">
                    <div className="mx-auto md:mx-8 lg:mx-12 flex flex-col md:flex-row lg:flex-row items-center w-full">
                        <div className="container mx-auto" data-bi-area="swimlane_hero">
                            <div className="card mx-md-0">
                                <div className="flex flex-wrap justify-center">
                                    <div className="flex rounded-none md:rounded-md lg:rounded-md flex-col md:flex-row md:mx-0 lg:mx-0 lg:flex-row items-center w-full h-auto bg-[#F2F2F2]">
                                        <div className="xl:p-24 mx-4 my-4 rounded-md sm:p-12 lg:w-6/12 bg-[#F2F2F2] dark:bg-gray-900 dark:text-white sm:w-full">
                                            <h1 className='text-xl md:text-3xl lg:text-3xl font-semibold '>Build powerful applications for Office</h1>
                                            <p className='py-4 text-md'>Use the Office JavaScript API to extend functionality for Word, Excel, PowerPoint, and Outlook.</p>
                                            <button className="inline-flex items-center px-3 py-2 text-sm font-small md:font-medium lg:font-medium text-white bg-[#006DC1] rounded-md hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 group">
                                                <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/overview/office-add-ins" target="_blank" className="text-[#ffffff] flex flex-row text-sm group">
                                                    Learn more about Office Add-ins
                                                    <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                                </a>
                                            </button>
                                        </div>
                                        <div className="lg:w-6/12 relative sm:w-full h-auto md:h-96 lg:h-full">
                                            <picture>
                                                <source
                                                    srcSet="https://cdn.graph.office.net/prod/media/office/home/office-add-ins-hero-800x500.png?v={1/string}"
                                                    media="(min-width: 1400px)"
                                                />
                                                <source
                                                    srcSet="https://cdn.graph.office.net/prod/media/office/home/office-add-ins-hero-630x450.png?v={1/string}"
                                                    media="(min-width: 1084px)"
                                                />
                                                <source
                                                    srcSet="https://cdn.graph.office.net/prod/media/office/home/office-add-ins-hero-561x421.png?v={1/string}"
                                                    media="(min-width: 860px)"
                                                />
                                                <source
                                                    srcSet="https://cdn.graph.office.net/prod/media/office/home/office-add-ins-hero-859x557.png?v={1/string}"
                                                    media="(min-width: 540px)"
                                                />
                                                <img
                                                    src="https://cdn.graph.office.net/prod/media/office/home/office-add-ins-hero-539x349.png?v={1/string}"
                                                    className="w-full h-full"
                                                    alt="Office Add-ins"
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                            </div>
=======
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
>>>>>>> 82f06b9be5f73b1b062312c65472fcbe48eab19a
                        </div>

                        <Contact />
                    </div>
                </div>

                <Addins />
                <BasicTools />
                <Whatsnew />
            </div >

            <BackToTop />
        </>
    );
}

export default Home;
