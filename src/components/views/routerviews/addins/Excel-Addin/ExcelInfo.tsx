/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import puzzle_1 from "../../../../../images/Microsoft/puzzle-1.png";
import puzzle_2 from "../../../../../images/Microsoft/puzzle-2.png";
import Documentation from "../../../../../images/Microsoft/documentation.ai.png";
import DeveloperTool from "../../../../../images/Microsoft/developer-tool.png";
import CommunityCall from "../../../../../images/Microsoft/community-call.png";
import Blog from "../../../../../images/Microsoft/blog-page.png";
import QA from "../../../../../images/Microsoft/faq.png";
import Suggestions from "../../../../../images/Microsoft/suggestion.png";
import { LiaPuzzlePieceSolid } from "react-icons/lia";
import { FaRegFile } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoFootballOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const ExcelInfo: React.FC = () => {
    return (
        <>
            <div className='bg-[#F2F2F2]'>
                <section className="px-2 space-y-6 bg-[#F2F2F2] py-8 md:py-12 lg:py-8 max-w-8xl mx-auto">
                    <section className="mt-2 mx-4 md:mx-12 lg:mx-12 pb-8">
                        <div className="mx-auto mt-8 grid justify-center gap-4 sm:grid-cols-2 md:max-w-[80rem] md:grid-cols-2 lg:grid-cols-4">
                            <div className="relative overflow-hidden rounded-md border bg-white p-2">
                                <div className="flex flex-col justify-between h-full rounded-md p-2">
                                    <div className='mt-2 mb-4 text-6xl text-[#1A702F]'>
                                        <LiaPuzzlePieceSolid />
                                    </div>
                                    <div className="space-y-2 flex-grow">
                                        <h3 className="font-bold">Everything you need to know to create Word add-ins</h3>
                                    </div>
                                    <div className="mt-2">
                                        <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/word/" target="_blank" className="text-[#0067B8] hover:underline flex flex-row text-sm group">
                                            Read an overview
                                            <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-md border bg-white p-2">
                                <div className="flex flex-col justify-between h-full rounded-md p-2">
                                    <div className='mt-2 mb-4 text-6xl text-[#1A702F]'>
                                        <FaRegFile />
                                    </div>
                                    <div className="space-y-2 flex-grow">
                                        <h3 className="font-bold">Everything you need to know to create Word add-ins</h3>
                                    </div>
                                    <div className="mt-2">
                                        <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/word/" target="_blank" className="text-[#0067B8] hover:underline flex flex-row text-sm group">
                                            Read an overview
                                            <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-md border bg-white p-2">
                                <div className="flex flex-col justify-between h-full rounded-md p-2">
                                    <div className='mt-2 mb-4 text-6xl text-[#1A702F]'>
                                        <IoSettingsOutline />
                                    </div>
                                    <div className="space-y-2 flex-grow">
                                        <h3 className="font-bold">Build your first Word task pane add-in</h3>
                                    </div>
                                    <div className="mt-2">
                                        <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/quickstarts/word-quickstart?tabs=yeomangenerator" target="_blank" className="text-[#0067B8] hover:underline flex flex-row text-sm group">
                                            Create the add-in
                                            <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-md border bg-white p-2">
                                <div className="flex flex-col justify-between h-full rounded-md p-2">
                                    <div className='mt-2 mb-4 text-6xl text-[#1A702F]'>
                                        <IoFootballOutline />
                                    </div>
                                    <div className="space-y-2 flex-grow">
                                        <h3 className="font-bold">Develop Word add-ins with Visual Studio</h3>
                                    </div>
                                    <div className="mt-2">
                                        <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/develop/develop-add-ins-visual-studio" target="_blank" className="text-[#0067B8] hover:underline flex flex-row text-sm group">
                                            Learn more
                                            <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="flex flex-wrap justify-center">
                        <div className="mx-auto md:mx-8 lg:mx-12 flex flex-col items-center w-full rounded-md">
                            <div className="max-w-md mx-2 md:mx-8 lg:mx-8 rounded-lg border border-transparent bg-gradient-to-br from-[#F4F3F5] to-[#b9dcd2] shadow-md overflow-hidden md:max-w-7xl">
                                <div className="md:flex">
                                    <div className="md:w-2/5">
                                        <img src={puzzle_1} alt="puzzel img" />
                                    </div>
                                    <div className="p-4 sm:p-4 md:p-10 lg:p-10 md:w-3/5">
                                        <h2 className="text-1xl lg:text-2xl xl:text-3xl font-semibold mb-2">Access Excel data with Microsoft Graph</h2>
                                        <p className="text-sm lg:text-base">Use the Excel REST API in Microsoft Graph to extend the value of your Excel data, calculations, reporting, and dashboards. With Microsoft Graph, you can read and modify Excel workbooks that are stored in OneDrive, SharePoint, or other supported storage platforms. By issuing REST API requests to Microsoft Graph, your web or mobile application can access Excel objects.</p>
                                        <div className="link-group">
                                            <a href="https://learn.microsoft.com/graph/excel-concept-overview" target="_blank" className="text-[#0067B8] hover:underline flex flex-row font-semibold text-sm pt-2 group">
                                                Learn more about Excel workbooks and charts APIs
                                                <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                            </a>
                                            <a href="https://learn.microsoft.com/en-us/graph/workbook-best-practice?tabs=http" target="_blank" className="text-[#0067B8] hover:underline flex flex-row font-semibold text-sm pt-2 group">
                                                Best practices for working with Excel APIs
                                                <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="max-w-md mx-2 md:mx-8 lg:mx-8 my-4 rounded-lg border border-transparent bg-gradient-to-br from-[#F4F3F5] to-[#b9dcd2] shadow-md overflow-hidden md:max-w-7xl">
                                <div className="md:flex">
                                    <div className="p-4 sm:p-4 md:p-10 lg:p-10 md:w-3/5">
                                        <h2 className="text-1xl lg:text-2xl xl:text-3xl font-semibold mb-2">Access Excel data with Microsoft Graph</h2>
                                        <p className="text-sm lg:text-base">Use the Excel REST API in Microsoft Graph to extend the value of your Excel data, calculations, reporting, and dashboards. With Microsoft Graph, you can read and modify Excel workbooks that are stored in OneDrive, SharePoint, or other supported storage platforms. By issuing REST API requests to Microsoft Graph, your web or mobile application can access Excel objects.</p>
                                        <div className="link-group">
                                            <a href="https://learn.microsoft.com/graph/excel-concept-overview" target="_blank" className="text-[#0067B8] hover:underline flex flex-row font-semibold text-sm pt-2 group">
                                                Learn more about Excel workbooks and charts APIs
                                                <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                            </a>
                                            <a href="https://learn.microsoft.com/en-us/graph/workbook-best-practice?tabs=http" target="_blank" className="text-[#0067B8] hover:underline flex flex-row font-semibold text-sm pt-2 group">
                                                Best practices for working with Excel APIs
                                                <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="md:w-2/5">
                                        <img src={puzzle_2} alt="puzzel img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="container mx-auto pt-4 pb-4 px-6 lg:px-9">
                        <div className="card rounded-lg">
                            <h2 className="font-semibold text-2xl md:text-3xl text-center pt-6 pb-2 px-8">Excel developer resources</h2>
                            <div className='flex justify-center'>
                                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
                                    {[
                                        { img: DeveloperTool, title: "Code", link: "https://developer.microsoft.com/en-us/microsoft-365/gallery/?filterBy=Word,Samples", linkText: "Download samples" },
                                        { img: CommunityCall, title: "Community Calls", link: "https://pnp.github.io/#community", linkText: "Add to calendar" },
                                        { img: Documentation, title: "Documentation", link: "https://learn.microsoft.com/en-us/office/dev/add-ins/word/", linkText: "Read doc" },
                                        { img: Blog, title: "Blog", link: "https://devblogs.microsoft.com/microsoft365dev/category/office-add-ins/", linkText: "Stay current" },
                                        { img: QA, title: "Microsoft Q&A forum", link: "https://learn.microsoft.com/en-us/answers/tags/321/office-development", linkText: "Ask a question" },
                                        { img: Suggestions, title: "Suggestions", link: "https://pnp.github.io/", linkText: "Request a feature" },
                                    ].map((item, index) => (
                                        <div key={index} className="flex flex-col justify-between items-center h-48 w-48 p-4">
                                            <div className='flex flex-col items-center'>
                                                <div className='flex justify-center items-center mb-8'>
                                                    <img src={item.img} alt={item.title} className='h-16 w-16' />
                                                </div>
                                                <div className='flex justify-center items-center mb-2'>
                                                    <p className='font-semibold'>{item.title}</p>
                                                </div>
                                                <div className='flex justify-center items-center'>
                                                    <a href={item.link} target="_blank" className="text-[#0067B8] hover:underline flex flex-row text-sm group">
                                                        {item.linkText}
                                                        <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <div className='bg-[#FFFFFF]'>
                    <section className="mt-2 mx-4 md:mx-12 lg:mx-12 pb-8">
                        <p className="font-semibold text-xl md:text-2xl pt-12 lg:text-4xl text-center">What's new in Excel development</p>
                        <div className="mx-auto mt-8 grid justify-center gap-4 sm:grid-cols-2 md:max-w-[80rem] md:grid-cols-2 lg:grid-cols-4">
                            <div className="relative overflow-hidden rounded-md border bg-white p-2">
                                <div className="flex flex-col justify-between h-full rounded-md p-2">
                                    <div className="space-y-2 flex-grow">
                                        <h3 className="font-bold">Office Add-in with SSO using nested app authentication (preview)</h3>
                                    </div>
                                    <div className="mt-8">
                                        <a href="https://github.com/OfficeDev/Office-Add-in-samples/tree/main/Samples/auth/Office-Add-in-SSO-NAA" target="_blank" className="text-[#0067B8] hover:underline flex flex-row text-sm group">
                                            View code sample
                                            <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-md border bg-white p-2">
                                <div className="flex flex-col justify-between h-full rounded-md p-2">
                                    <div className="space-y-2 flex-grow">
                                        <h3 className="font-bold">Excel Tutorial - Completed</h3>
                                    </div>
                                    <div className="mt-8">
                                        <a href="https://github.com/OfficeDev/Office-Add-in-samples/tree/main/Samples/tutorials/excel-tutorial" target="_blank" className="text-[#0067B8] hover:underline flex flex-row text-sm group">
                                            View code sample
                                            <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-md border bg-white p-2">
                                <div className="flex flex-col justify-between h-full rounded-md p-2">
                                    <div className="space-y-2 flex-grow">
                                        <h3 className="font-bold">Techniques to access data from an Office Add-in when offline</h3>
                                    </div>
                                    <div className="mt-8">
                                        <a href="https://github.com/OfficeDev/Office-Add-in-samples/tree/main/Samples/Excel.OfflineStorageAddin" target="_blank" className="text-[#0067B8] hover:underline flex flex-row text-sm group">
                                            View code sample
                                            <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-md border bg-white p-2">
                                <div className="flex flex-col justify-between h-full rounded-md p-2">
                                    <div className="space-y-2 flex-grow">
                                        <h3 className="font-bold">Where do I start with Microsoft 365 development? Part 1: Office add-in model</h3>
                                    </div>
                                    <div className="mt-8">
                                        <a href="https://www.youtube.com/watch?v=EimKkmlHZ4w" target="_blank" className="text-[#0067B8] hover:underline flex flex-row text-sm group">
                                            View code sample
                                            <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div >

            <div className="mb-12 flex justify-center items-center">
                <a target="_blank" href="https://developer.microsoft.com/en-us/microsoft-365/gallery/?filterBy=excel" className="text-[#0067B8] hover:underline flex flex-row text-sm group">
                    View more Excel developer resources
                    <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
            </div>
        </>
    )
}

export default ExcelInfo;
