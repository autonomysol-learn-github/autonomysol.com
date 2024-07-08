/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import bg_outlook from "../../../../../images/Microsoft/bg-outlook.png";
import BackToTop from "../../../BackToTop";
import OutlookInfo from "./OutlookInfo";
import Loader from "../../../../Loader/Loader";
import useLoader from "../../../../utils/useLoader";
import { IoIosArrowForward } from "react-icons/io";

const Outlook: React.FC = () => {
    const isLoading = useLoader();

    return (
        <>
            {isLoading && <Loader />}
            <div className='w-full my-6'>
                <div className="flex flex-wrap justify-center">
                    <div className="mx-4 md:mx-12 lg:mx-12 flex rounded-md flex-col-reverse md:flex-row items-center w-full bg-[#F2F2F2]">
                        <div className="xl:p-24 mx-4 my-4 rounded-md sm:p-12 lg:w-6/12 bg-[#F2F2F2] sm:w-full">
                            <h1 className='text-xl md:text-3xl lg:text-3xl font-semibold'>Build powerful apps for Outlook and Microsoft 365</h1>
                            <p className='py-4 text-md'>Reach hundreds of millions of users across Windows, Mac, Android, iOS, and the web.</p>
                            <button className="inline-flex items-center px-3 py-2 text-sm font-small md:font-medium lg:font-medium text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 group">
                                <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/reference/overview/powerpoint-add-ins-reference-overview" target="_blank" className="text-[#ffffff] flex flex-row text-sm group">
                                    Learn more about building apps for Outlook
                                    <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </button>
                        </div>
                        <div className="lg:w-6/12 relative sm:w-full sm:h-full">
                            <img src={bg_outlook} alt="img" className="h-full rounded-md" />
                        </div>
                    </div>
                </div>
            </div>

            <OutlookInfo />
            <BackToTop />
        </>
    );
}

export default Outlook;
