import React from "react";
import bg_excel from "../../../../../images/Microsoft/bg-excel.png";
import BackToTop from "../../../BackToTop";
import ExcelInfo from "./ExcelInfo";
import Loader from "../../../../Loader/Loader";
import useLoader from "../../../../utils/useLoader";

const Excel: React.FC = () => {
    const isLoading = useLoader();

    return (
        <>
            {isLoading && <Loader />}
            <div className='w-full my-6'>
                <div className="bg-[#B9DCD2] flex flex-wrap justify-center">
                    <div className="mx-4 md:mx-8 lg:mx-12 flex flex-col md:flex-col lg:flex-row items-center w-full bg-white">
                        <div className="w-full lg:w-6/12 sm:w-full p-6 xl:p-24 sm:p-12">
                            <div className="max-w-full md:max-w-full lg:max-w-md p-2 md:p-6 lg:p-6 my-4 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                                <h4 className="mb-2 py-2 text-1xl md:text-2xl lg-text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">Build powerful applications for Excel</h4>
                                <p className="mb-3 font-light text-xs text-gray-700 dark:text-gray-400">Extend Excel functionality and access Excel data over the web.</p>
                                <button className="inline-flex items-center my-2 px-3 py-2 text-sm font-small md:font-medium lg:font-medium text-center text-white rounded-md bg-[#07641D] hover:opacity-85">
                                    Learn more
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-6/12 relative sm:w-full sm:h-full">
                            <img src={bg_excel} alt="Excel" className="h-full" />
                        </div>
                    </div>
                </div>
            </div>

            <ExcelInfo />
            <BackToTop />
        </>
    );
}

export default Excel;
