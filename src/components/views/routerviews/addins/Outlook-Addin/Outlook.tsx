/* eslint-disable react/jsx-no-target-blank */
import React from "react";
// import bg_outlook from "../../../../../images/Microsoft/bg-outlook.png";
import BackToTop from "../../../BackToTop";
import OutlookInfo from "./OutlookInfo";
import Loader from "../../../../Loader/Loader";
import useLoader from "../../../../utils/useLoader";
import { IoIosArrowForward } from "react-icons/io";
import Contact from "../../Contact/Contact";

const Outlook: React.FC = () => {
    const isLoading = useLoader();

    return (
        <>
            {isLoading && <Loader />}
            <div className="h-auto md:h-96 lg:h-full flex flex-wrap justify-center">
                <div className="mx-auto md:mx-8 lg:mx-12 flex flex-col md:flex-row lg:flex-row items-center w-full">
                    <div className="container mx-auto" data-bi-area="swimlane_hero">
                        <div className="card mx-md-0">
                            <div className="flex flex-wrap justify-center">
                                <div className="flex rounded-none md:rounded-md lg:rounded-md flex-col md:flex-row md:mx-0 lg:mx-0 lg:flex-row items-center w-full h-auto bg-[#F2F2F2]">
                                    <div className="xl:p-24 mx-4 my-4 rounded-md sm:p-12 lg:w-6/12 bg-[#F2F2F2] dark:bg-gray-900 dark:text-white sm:w-full">
                                        <h1 className='text-xl md:text-3xl lg:text-3xl font-semibold'>Build powerful apps for Outlook and Microsoft 365</h1>
                                        <p className='py-4 text-md'>Reach hundreds of millions of users across Windows, Mac, Android, iOS, and the web.</p>
                                        <div className="flex">
                                            <button className="inline-flex items-center px-3 py-2 text-sm font-small md:font-medium lg:font-medium text-white bg-[#006DC1] rounded hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 group">
                                                <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/reference/overview/powerpoint-add-ins-reference-overview" target="_blank" className="text-[#ffffff] flex flex-row text-sm group whitespace-nowrap">
                                                    Learn more about building apps for Outlook
                                                    <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="lg:w-6/12 relative sm:w-full h-auto md:h-96 lg:h-full">
                                        <picture>
                                            <source
                                                srcSet="https://cdn.graph.office.net/prod/media/outlook/home/outlook-hero-vp5-800x450.png?v={1/string}"
                                                media="(min-width: 1400px)"
                                            />
                                            <source
                                                srcSet="https://cdn.graph.office.net/prod/media/outlook/home/outlook-hero-vp4-630x449.png?v={1/string}"
                                                media="(min-width: 1084px)"
                                            />
                                            <source
                                                srcSet="https://cdn.graph.office.net/prod/media/outlook/home/outlook-hero-vp3-561x421.png?v={1/string}"
                                                media="(min-width: 860px)"
                                            />
                                            <source
                                                srcSet="https://cdn.graph.office.net/prod/media/outlook/home/outlook-hero-vp2-859x557.png?v={1/string}"
                                                media="(min-width: 540px)"
                                            />
                                            <img
                                                src="https://cdn.graph.office.net/prod/media/outlook/home/outlook-hero-vp1-539x349.png?v={1/string}"
                                                className="rounded-md card-img img-object-cover h-full w-full"
                                                alt="Outlook add-in on a surface laptop displayed on concrete desk next to a vase"
                                            />
                                        </picture>
                                        {/* <img src={bg_outlook} alt="img" className="h-full rounded-md" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Contact />
                </div>
            </div>

            <OutlookInfo />
            <BackToTop />
        </>
    );
}

export default Outlook;
