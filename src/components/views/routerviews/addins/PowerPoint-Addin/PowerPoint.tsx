import React from "react";
// import bg_powerpoint from "../../../../../images/Microsoft/bg-powerpoint.png";
import BackToTop from "../../../BackToTop";
import Loader from "../../../../Loader/Loader";
import useLoader from "../../../../utils/useLoader";
import PowerPointInfo from "./PowerPointInfo";
import Contact from "../../Contact/Contact";

const Powerpoint: React.FC = () => {
    const isLoading = useLoader();

    return (
        <>
            {isLoading && <Loader />}
            <div className="bg-[#E1D3C7]">
                <div className='w-full mb-6'>
                    <div className="bg-[#ED6C47] flex flex-wrap justify-center">
                        <div className="relative w-full mx-auto md:mx-12 lg:mx-12">
                            <div className="relative h-[40vh] md:h-[70vh]">
                                <picture>
                                    <source
                                        srcSet="https://cdn.graph.office.net/prod/media/powerpoint/home/PowerPoint_Hero_1600x600.png"
                                        media="(min-width: 1779px)"
                                    />
                                    <source
                                        srcSet="https://cdn.graph.office.net/prod/media/powerpoint/home/PowerPoint_Hero_1600x600.png"
                                        media="(min-width: 1400px)"
                                    />
                                    <source
                                        srcSet="https://cdn.graph.office.net/prod/media/powerpoint/home/PowerPoint_Hero_1259x472.png"
                                        media="(min-width: 1084px)"
                                    />
                                    <source
                                        srcSet="https://cdn.graph.office.net/prod/media/powerpoint/home/PowerPoint_Hero_1083x609.png"
                                        media="(min-width:768px)"
                                    />
                                    <source
                                        srcSet="https://cdn.graph.office.net/prod/media/powerpoint/home/PowerPoint_Hero_767x431.png"
                                        media="(min-width:540px)"
                                    />
                                    <source
                                        srcSet="https://cdn.graph.office.net/prod/media/powerpoint/home/PowerPoint_Hero_539x303.png"
                                        media="(min-width:0)"
                                    />
                                    <img
                                        srcSet="https://cdn.graph.office.net/prod/media/powerpoint/home/PowerPoint_Hero_1259x472.png"
                                        src="https://cdn.graph.office.net/prod/media/powerpoint/home/PowerPoint_Hero_1259x472.png"
                                        alt="Laptop on a desk displaying a PowerPoint presentation add-in"
                                        className="w-auto h-auto md:w-full lg:md-full md:h-full lg:h-full object-cover md:object-contain"
                                    />
                                </picture>

                                <div className="absolute top-0 left-0 xl:p-24 sm:p-12 w-full lg:w-6/12 sm:w-full flex justify-center items-end md:items-center lg:items-center h-full">
                                    <div className="w-full p-2 md:p-6 lg:p-6 bg-[#ED6C47] md:bg-white lg:bg-white shadow dark:bg-gray-800 dark:border-gray-700" style={{ maxWidth: '600px' }}>
                                        <h4 className="mb-2 text-xl md:text-2xl lg:text-4xl font-semibold tracking-tight text-white md:text-gray-900 lg:text-gray-900 dark:text-white">Create add-ins for PowerPoint</h4>
                                        <p className="mb-3 font-light text-xs text-white md:text-gray-400 lg:text-gray-400 dark:text-gray-400">Build engaging solutions for your users' presentations across platforms on Windows, Office on the web, iOS, and Mac.</p>
                                        <button className="inline-flex items-center my-2 px-3 py-2 text-sm font-small md:font-medium lg:font-medium text-center text-white rounded bg-[#225B62] hover:opacity-85">
                                            Start building apps for PowerPoint
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Contact />
                    </div>
                </div>

                <PowerPointInfo />
            </div>

            <BackToTop />
        </>
    );
}

export default Powerpoint;
