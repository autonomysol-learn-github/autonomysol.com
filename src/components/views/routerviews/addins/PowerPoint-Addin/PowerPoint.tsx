import React from "react";
import bg_powerpoint from "../../../../../images/Microsoft/bg-powerpoint.png";
import BackToTop from "../../../BackToTop";
import Loader from "../../../../Loader/Loader";
import useLoader from "../../../../utils/useLoader";
import PowerPointInfo from "./PowerPointInfo";

const Powerpoint: React.FC = () => {
    const isLoading = useLoader();

    return (
        <>
            {isLoading && <Loader />}
            <div className="bg-[#E1D3C7]">
                <div className='w-full my-6'>
                    <div className="bg-[#ED6C47] flex flex-wrap justify-center">
                        <div className="relative w-full mx-4  md:mx-12 lg:mx-12">
                            <div className="relative h-[70vh]">
                                <img src={bg_powerpoint} alt="PowerPoint" className="w-full h-full object-cover" />
                                <div className="absolute top-0 left-0 xl:p-24 sm:p-12 w-full lg:w-6/12 sm:w-full flex justify-center items-end md:items-center lg:items-center h-full">
                                    <div className="w-full p-2 md:p-6 lg:p-6 my-4 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700" style={{ maxWidth: '600px' }}>
                                        <h4 className="mb-2 py-2 text-xl md-text:2xl lg-text:4xl font-semibold tracking-tight text-gray-900 dark:text-white">Create add-ins for PowerPoint</h4>
                                        <p className="mb-3 font-light text-xs text-gray-700 dark:text-gray-400">Build engaging solutions for your users' presentations across platforms on Windows, Office on the web, iOS, and Mac.</p>
                                        <button className="inline-flex items-center my-2 px-3 py-2 text-sm font-small md:font-medium lg:font-medium text-center text-white rounded-md bg-[#225B62] hover:opacity-85">
                                            Start building apps for PowerPoint
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <PowerPointInfo />
            </div>

            <BackToTop />
        </>
    );
}

export default Powerpoint;
