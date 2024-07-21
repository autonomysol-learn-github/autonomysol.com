/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import bg_word from "../../../../../images/Microsoft/bg-word.png";
import Loader from "../../../../Loader/Loader";
import useLoader from "../../../../utils/useLoader";
import BackToTop from "../../../BackToTop";
import WordInfo from "./WordInfo";
import Contact from "../../Contact/Contact";

const Word: React.FC = () => {
    const isLoading = useLoader();

    return (
        <>
            {isLoading && <Loader />}
            <div className="h-auto md:h-96 bg-[#005CA5] lg:h-full flex flex-wrap justify-center">
                <div className="mx-auto md:mx-8 lg:mx-12 flex flex-col md:flex-row lg:flex-row items-center w-full">
                    <div className="container mx-auto" data-bi-area="swimlane_hero">
                        <div className="card mx-md-0">
                            <div className="flex flex-wrap justify-center">
                                <div className="flex rounded-none md:rounded-md lg:rounded-md flex-col-reverse md:flex-row md:mx-0 lg:mx-0 lg:flex-row items-center w-full h-auto dark:bg-gray-900 bg-[#005CA5] md:bg-[#ffffff] lg:bg-[#ffffff] xl:bg-[#ffffff]">
                                    <div className="xl:p-24 mx-4 my-4 rounded-md sm:p-12 lg:w-6/12 sm:w-full">
                                        <div className="text-white md:h-52 lg:md-60 md:text-black lg:text-balck bg-[#005CA5] md:bg-[#ffffff] lg:bg-[#ffffff] shadow-none md:shadow-lg lg:shadow-lg xl:shadow-lg md: border-none dark:text-white dark:bg-gray-900">
                                            <h4 className="mb-2 pt-2 md:px-4 lg:px-4 text-1xl md:text-2xl lg:text-3xl font-semibold tracking-tight md:text-gray-900 lg:text-gray-900 dark:text-white">
                                                Build, test, debug, and publish Word add-ins
                                            </h4>
                                            <p className="mb-3 pt-2 md:px-4 lg:px-4 font-normal text-xs">
                                                Use familiar web technologies such as HTML, CSS, and JavaScript to build a solution that can run in Word across multiple platforms, including on the web, Windows, Mac, and iPad.
                                            </p>
                                            <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/word/" target="_blank" rel="noopener noreferrer">
                                                <button className="inline-flex items-center my-2 md:mx-4 lg:mx-4 px-3 py-2 text-sm font-small md:font-medium lg:font-medium text-center text-white rounded bg-[#185ABD] hover:opacity-85">
                                                    Extend Word
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="lg:w-6/12 relative sm:w-full h-auto md:h-96 lg:h-full">
                                        <img src={bg_word} alt="Excel" className="h-auto m-0 sm:m-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Contact />
                </div>
            </div>

            <WordInfo />
            <BackToTop />
        </>
    );
}

export default Word;
