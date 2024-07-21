import React from "react";
import bg_excel from "../../../../../images/Microsoft/bg-excel.png";
import BackToTop from "../../../BackToTop";
import ExcelInfo from "./ExcelInfo";
import Loader from "../../../../Loader/Loader";
import useLoader from "../../../../utils/useLoader";
import Contact from "../../Contact/Contact";

const Excel: React.FC = () => {
    const isLoading = useLoader();

    return (
        <>
            {isLoading && <Loader />}
            <div className="h-auto md:h-96 bg-[#B9DCD2] lg:h-full flex flex-wrap justify-center">
                <div className="mx-auto md:mx-8 lg:mx-12 flex flex-col md:flex-row lg:flex-row items-center w-full">
                    <div className="container mx-auto" data-bi-area="swimlane_hero">
                        <div className="card mx-md-0">
                            <div className="flex flex-wrap justify-center">
                                <div className="flex rounded-none md:rounded-md lg:rounded-md flex-col-reverse md:flex-row md:mx-0 lg:mx-0 lg:flex-row items-center w-full h-auto dark:bg-gray-900 bg-[#B9DCD2] md:bg-[#ffffff] lg:bg-[#ffffff] xl:bg-[#ffffff]">
                                    <div className="xl:p-24 mx-4 my-4 rounded-md sm:p-12 lg:w-6/12 sm:w-full flex-1">
                                        <div className="text-black bg-[#B9DCD2] md:bg-[#ffffff] lg:bg-[#ffffff] shadow-none md:shadow-lg lg:shadow-lg xl:shadow-lg md:border-none dark:text-white dark:bg-gray-900">
                                            <h4 className="mb-2 pt-2 md:pt-6 lg:pt-6 md:px-4 lg:px-4 text-1xl md:text-2xl lg:text-3xl font-semibold tracking-tight md:text-gray-900 lg:text-gray-900 dark:text-white">
                                                Build powerful applications for Excel
                                            </h4>
                                            <p className="mb-3 pt-2 md:px-4 lg:px-4 font-normal text-xs">
                                                Extend Excel functionality and access Excel data over the web. Unlock the power of Excel with web-based data access and enhanced features.
                                            </p>
                                            <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/word/" target="_blank" rel="noopener noreferrer">
                                                <button className="inline-flex items-center my-4 md:mx-4 lg:mx-4 px-3 py-2 text-sm font-small rounded md:font-medium lg:font-medium text-center text-white bg-[#07641D] hover:opacity-85">
                                                    Learn more
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="lg:w-6/12 relative sm:w-full h-full flex-1">
                                        <img src={bg_excel} alt="Excel" className="h-full w-full m-0 sm:m-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Contact />
                </div>
            </div>

            <ExcelInfo />
            <BackToTop />
        </>
    );
}

export default Excel;
