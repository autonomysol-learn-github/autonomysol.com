/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Image1 from "../../../../images/Microsoft/Word.png";
import Image2 from "../../../../images/Microsoft/Excel.png";
import Image3 from "../../../../images/Microsoft/Powerpoint.png";
import Image4 from "../../../../images/Microsoft/Outlook.png";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import Loader from '../../../Loader/Loader';
import useLoader from '../../../utils/useLoader';

const Addins = () => {
    const isLoading = useLoader();

    return (
        <>
            {isLoading && <Loader />}<section className="mt-20 mx-4 md:mx-8 lg:mx-8 pb-8">
                <div className="mx-auto mt-8 grid justify-center gap-4 sm:grid-cols-2 md:max-w-[80rem] md:grid-cols-2 lg:grid-cols-4">
                    <div className="relative overflow-hidden bg-white p-2 max-w-xs">
                        <div className="flex flex-col justify-between h-full p-2">
                            <div className='mt-2 mb-4 text-6xl text-[#1A702F]'>
                                <img className="rounded-t-lg ml-1" src={Image1} alt="Word" height={120} width={120} />
                            </div>
                            <h2 className="text-2xl font-semibold">Word</h2>
                            <Link to="/word">
                                <button className="inline-flex mt-4 items-center px-3 py-2 text-sm font-small md:font-medium lg:font-medium text-white bg-[#006DC1] rounded-md hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 group">
                                    Create add-ins for Word
                                    <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative overflow-hidden bg-white p-2 max-w-xs">
                        <div className="flex flex-col justify-between h-full p-2">
                            <div className='mt-2 mb-4 text-6xl text-[#1A702F]'>
                                <img className="rounded-t-lg ml-1" src={Image2} alt="Excel" height={120} width={120} />
                            </div>
                            <h2 className="text-2xl font-semibold">Excel</h2>
                            <Link to="/excel">
                                <button className="inline-flex mt-4 items-center px-3 py-2 text-sm font-small md:font-medium lg:font-medium text-white bg-[#006DC1] rounded-md hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 group">
                                    Create add-ins for Excel
                                    <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative overflow-hidden bg-white p-2 max-w-xs">
                        <div className="flex flex-col justify-between h-full p-2">
                            <div className='mt-2 mb-4 text-6xl text-[#1A702F]'>
                                <img className="rounded-t-lg ml-1" src={Image3} alt="PowerPoint" height={120} width={120} />
                            </div>
                            <h2 className="text-2xl font-semibold">PowerPoint</h2>
                            <Link to="/powerpoint">
                                <button className="inline-flex mt-4 items-center px-3 py-2 text-sm font-small md:font-medium lg:font-medium text-white bg-[#006DC1] rounded-md hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 group">
                                    Create add-ins for PowerPoint
                                    <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative overflow-hidden bg-white p-2 max-w-xs">
                        <div className="flex flex-col justify-between h-full p-2">
                            <div className='mt-2 mb-4 text-6xl text-[#1A702F]'>
                                <img className="rounded-t-lg ml-1" src={Image4} alt="Outlook" height={120} width={120} />
                            </div>
                            <h2 className="text-2xl font-semibold">Outlook</h2>
                            <Link to="/outlook">
                                <button className="inline-flex mt-4 items-center px-3 py-2 text-sm font-small md:font-medium lg:font-medium text-white bg-[#006DC1] rounded-md hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 group">
                                    Create add-ins for Outlook
                                    <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Addins;