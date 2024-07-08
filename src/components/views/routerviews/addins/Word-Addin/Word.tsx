/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import bg_word from "../../../../../images/Microsoft/bg-word.png";
import Loader from "../../../../Loader/Loader";
import useLoader from "../../../../utils/useLoader";
import BackToTop from "../../../BackToTop";
import WordInfo from "./WordInfo";

const Word: React.FC = () => {
    const isLoading = useLoader();

    return (
        <>
            {isLoading && <Loader />}
            <div className='w-full my-6'>
                <div className="bg-[#185ABD] flex flex-wrap justify-center">
                    <div className="mx-4 md:mx-12 lg:mx-12 flex flex-col md:flex-col lg:flex-row items-center w-full bg-white">
                        <div className="w-full lg:w-6/12 sm:w-full p-6 xl:p-24 sm:p-12">
                            <div className="max-w-full md:max-w-full lg:max-w-md p-4 md:p-6 lg:p-6 my-4 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                                <h4 className="mb-2 py-2 text-1xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">Build, test, debug, and publish Word add-ins</h4>
                                <p className="mb-3 font-light text-xs text-gray-700 dark:text-gray-400">Use familiar web technologies such as HTML, CSS, and JavaScript to build a solution that can run in Word across multiple platforms, including on the web, Windows, Mac, and iPad.</p>
                                <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/word/" target="_blank" rel="noopener noreferrer">
                                    <button className="inline-flex items-center my-2 px-3 py-2 text-sm font-small md:font-medium lg:font-medium text-center text-white rounded-md bg-[#005CA5] hover:opacity-85">
                                        Extend Word
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-6/12 relative sm:w-full sm:h-full">
                            <img src={bg_word} alt="Excel" className="h-full" />
                        </div>
                    </div>
                </div>
            </div>

            <WordInfo />
            <BackToTop />
        </>
    );
}

export default Word;
