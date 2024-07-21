import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
    const phoneNumber = '923458648238';
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    const handleClick = () => {
        window.open(whatsappLink, '_blank');
    };

    return (
        <>
            <div className="fixed bottom-0 right-0 z-20 md:top-1/2 lg:top-1/2 transform md:-translate-y-1/2 group md:right-0 md:left-auto md:bottom-auto w-full md:w-auto flex justify-center">
                <div className="relative flex flex-col md:flex-row items-center bg-[#006DC1] rounded-t-md md:rounded-l-md">
                    <div className="flex flex-row md:flex-col items-center space-x-4 md:space-x-0 md:space-y-4 p-2">
                        <div className="p-3 rounded-t-md md:rounded-l-md flex items-center justify-center cursor-pointer">
                            <AiOutlineMessage className="text-white w-5 h-5" />
                        </div>
                        <div className="p-3 rounded-t-md md:rounded-l-md flex items-center justify-center cursor-pointer">
                            <CiMail className="text-white w-5 h-5" />
                        </div>
                        <div className="p-3 rounded-t-md md:rounded-l-md flex items-center justify-center cursor-pointer">
                            <IoCallOutline className="text-white w-5 h-5" />
                        </div>
                    </div>

                    <div className="fixed bottom-0 right-0 md:top-1/3 lg:top-1/2 transform md:-translate-y-1/2 z-50 group md:right-0 md:left-auto md:bottom-auto w-full md:w-auto flex justify-center">
                        <div className="relative flex flex-col md:flex-row items-center bg-[#006DC1] rounded-t-md md:rounded-l-md">
                            <div className="flex flex-row md:flex-col items-center space-x-4 md:space-x-0 md:space-y-4 p-2 group-hover:hidden md:group-hover:flex">
                                <div className="p-3 rounded-t-md md:rounded-l-md flex items-center justify-center cursor-pointer">
                                    <AiOutlineMessage className="text-white w-5 h-5" />
                                </div>
                                <div className="p-3 rounded-t-md md:rounded-l-md flex items-center justify-center cursor-pointer">
                                    <CiMail className="text-white w-5 h-5" />
                                </div>
                                <div className="p-3 rounded-t-md md:rounded-l-md flex items-center justify-center cursor-pointer">
                                    <IoCallOutline className="text-white w-5 h-5" />
                                </div>
                            </div>

                            <div className="absolute bottom-full md:bottom-auto md:top-0 md:right-0 bg-[#006DC1] w-80 md:w-72 lg:w-72 text-white p-4 rounded-t-md md:rounded-l-md transition-transform transform translate-y-full md:translate-x-full group-hover:translate-y-0 md:group-hover:translate-x-0 duration-300 opacity-0 group-hover:opacity-100 min-h-full md:min-w-0 sm:min-w-[20rem]">
                                <div onClick={handleClick} className="flex p-2 items-center mb-2 font-semibold cursor-pointer">
                                    <AiOutlineMessage className="w-5 h-5 mr-2 mt-1" />
                                    <span className="flex-nowrap">Chat with us</span>
                                    <IoIosArrowForward className="w-4 h-4 ml-1 mt-1 transition-transform duration-300 transform group-hover:translate-x-1" />
                                </div>
                                <Link to="/contact-us">
                                    <div className="flex p-2 items-center mb-2 font-semibold cursor-pointer">
                                        <CiMail className="w-5 h-5 mr-2 mt-1" />
                                        <span className="flex-nowrap">Contact sales</span>
                                        <IoIosArrowForward className="w-4 h-4 ml-1 mt-1 transition-transform duration-300 transform group-hover:translate-x-1" />
                                    </div>
                                </Link>
                                <div className="flex p-2 items-center mb-2 font-semibold cursor-pointer">
                                    <IoCallOutline className="w-5 h-5 mr-2" />
                                    <span className="flex-nowrap">1 855-270-0615</span>
                                </div>
                                <div className="text-sm text-center font-semibold">
                                    Available M-F 6 AM to 3 PM PT.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
