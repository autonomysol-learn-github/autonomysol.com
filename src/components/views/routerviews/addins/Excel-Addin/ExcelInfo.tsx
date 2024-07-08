/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
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
            <div className='bg-[#F2F2F2] my-4'>
                <section className="px-2 space-y-6 bg-[#F2F2F2] py-8 md:py-12 lg:py-8 max-w-8xl mx-auto">
                    <div className="flex mx-10 flex-col space-y-4">
                        <p className="font-semibold text-xl md:text-2xl pt-12 lg:text-4xl text-center">What can I do with Excel?</p>
                    </div>

                    <section className="mt-20 mx-4 md:mx-10 lg:mx-10 pb-8">
                        <div className="mx-auto mt-8 grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
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

                    <div className='mx-4 md:mx-10 lg:mx-10'>
                        <section id="Overview" className="mb-6">
                            <div className="card rounded-lg border border-transparent bg-gradient-to-br from-[#F4F3F5] to-[#b9dcd2]">
                                <div className="flex flex-col lg:flex-row lg:no-gutters">
                                    <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
                                        <picture>
                                            <source srcSet="https://cdn.graph.office.net/prod/media/excel/home/404x256-vp5-excel-add-in.png?v={1/string}" media="(min-width: 1400px)" />
                                            <source srcSet="https://cdn.graph.office.net/prod/media/excel/home/308x256-vp4-excel-add-in.png?v={1/string}" media="(min-width: 1084px)" />
                                            <source srcSet="https://cdn.graph.office.net/prod/media/excel/home/334x256-vp3-excel-add-in.png?v={1/string}" media="(min-width: 860px)" />
                                            <source srcSet="https://cdn.graph.office.net/prod/media/excel/home/516x290-vp2-excel-add-in.png?v={1/string}" media="(min-width: 540px)" />
                                            <img src="https://cdn.graph.office.net/prod/media/excel/home/360x202-vp1-excel-add-in.png?v={1/string}" className="card-img" loading="lazy" alt="" />
                                        </picture>
                                    </div>
                                    <div className="w-full lg:w-7/12 p-4 lg:p-6">
                                        <div className="card-body">
                                            <h2 className="text-xl md:text-2xl lg-text-2xl font-semibold text-black">Extend Excel functionality with Office Add-ins</h2>
                                            <p className="py-2 text-sm md:text-md lg-text-md">
                                                With the Office Add-ins platform, you can extend Excel's functionality through a web app that runs within the Excel client on multiple platforms such as Windows, Online, Mac OS, iPad. Unlike COM and VSTO add-ins, Office Add-ins can do almost anything a webpage can do inside a browser. This technology is enabled using the JavaScript API for Office known as Office.js.
                                            </p>

                                            <div className="link-group">
                                                <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/reference/overview/excel-add-ins-reference-overview" target="_blank" className="text-[#0067B8] hover:underline flex flex-row font-semibold text-sm pt-2 group">
                                                    Learn more about Excel JavaScript APIs
                                                    <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                                </a>
                                                <a href="hhttps://learn.microsoft.com/en-us/office/client-developer/excel/excel-home" target="_blank" className="text-[#0067B8] hover:underline flex flex-row font-semibold text-sm pt-2 group">
                                                    Read about COM and VSTO add-ins
                                                    <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="card rounded-lg border border-transparent bg-gradient-to-br from-[#F4F3F5] to-[#b9dcd2]">
                                <div className="flex flex-col lg:flex-row lg:no-gutters">
                                    <div className="lg:w-7/12 p-4 lg:p-6 order-2 lg:order-1">
                                        <div className="card-body">
                                            <h2 className="text-xl md:text-2xl lg-text-2xl font-semibold text-black">Access Excel data with Microsoft Graph</h2>
                                            <p className="py-2 text-sm md:text-md lg-text-md">
                                                Use the Excel REST API in Microsoft Graph to extend the value of your Excel data, calculations, reporting, and dashboards. With Microsoft Graph, you can read and modify Excel workbooks that are stored in OneDrive, SharePoint, or other supported storage platforms. By issuing REST API requests to Microsoft Graph, your web or mobile application can access Excel objects.
                                            </p>

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
                                    <div className="lg:w-5/12 order-1 lg:order-2">
                                        <picture>
                                            <source srcSet="https://cdn.graph.office.net/prod/media/excel/home/404x256-vp5-use-excel-data-with-graph.png?v={1/string}" media="(min-width: 1400px)" />
                                            <source srcSet="https://cdn.graph.office.net/prod/media/excel/home/308x256-vp4-use-excel-data-with-graph.png?v={1/string}" media="(min-width: 1084px)" />
                                            <source srcSet="https://cdn.graph.office.net/prod/media/excel/home/334x256-vp3-use-excel-data-with-graph.png?v={1/string}" media="(min-width: 860px)" />
                                            <source srcSet="https://cdn.graph.office.net/prod/media/excel/home/516x290-vp2-use-excel-data-with-graph.png?v={1/string}" media="(min-width: 540px)" />
                                            <img src="https://cdn.graph.office.net/prod/media/excel/home/360x202-vp1-use-excel-data-with-graph.png?v={1/string}" className="card-img" loading="lazy" alt="" />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </section>
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
                    <section className="mt-2 mx-8 md:mx-12 lg:mx-12 pb-8">
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
            </div>

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
