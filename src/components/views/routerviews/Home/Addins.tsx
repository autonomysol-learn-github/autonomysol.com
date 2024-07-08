/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Ms_1 from "../../../../images/Microsoft/mi-1.jpg";
import Image1 from "../../../../images/Microsoft/Word.png";
import Image2 from "../../../../images/Microsoft/Excel.png";
import Image3 from "../../../../images/Microsoft/Powerpoint.png";
import Image4 from "../../../../images/Microsoft/Outlook.png";
import { Link } from 'react-router-dom';
import Loader from '../../../Loader/Loader';
import useLoader from '../../../utils/useLoader';

const Addins = () => {
    const isLoading = useLoader();

    return (
        <>
            {isLoading && <Loader />}
            <div className="w-fit mx-2 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                <div className="max-w-sm bg-white">
                    <div className="block">
                        <img className="rounded-t-lg ml-1" src={Image1} alt="Word" height={120} width={120} />
                    </div>
                    <div className="p-4">
                        <div className="block">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Word</h5>
                        </div>
                        <Link to="/word">
                            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 group">
                                Create add-ins for Word
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="max-w-sm bg-white">
                    <div className="block">
                        <img className="rounded-t-lg ml-1" src={Image2} alt="Excel" height={120} width={120} />
                    </div>
                    <div className="p-4">
                        <div className="block">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Excel</h5>
                        </div>
                        <Link to="/excel">
                            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 group">
                                Create add-ins for Excel
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="max-w-sm bg-white">
                    <div className="block">
                        <img className="rounded-t-lg ml-1" src={Image3} alt="PowerPoint" height={120} width={120} />
                    </div>
                    <div className="p-4">
                        <div className="block">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">PowerPoint</h5>
                        </div>
                        <Link to="/powerpoint">
                            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 group">
                                Create add-ins for PowerPoint
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="max-w-sm bg-white">
                    <div className="block">
                        <img className="rounded-t-lg ml-1" src={Image4} alt="Outlook" height={120} width={120} />
                    </div>
                    <div className="p-4">
                        <div className="block">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Outlook</h5>
                        </div>
                        <Link to="/outlook">
                            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 group">
                                Create add-ins for Outlook
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Addins;