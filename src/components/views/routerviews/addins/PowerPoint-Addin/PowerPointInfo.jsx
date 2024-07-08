/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import powerpoint_addin from "../../../../../images/Microsoft/powerpoint-addins.png";
import script_lab from "../../../../../images/Microsoft/scriptlab.png";
import Documentation from "../../../../../images/Microsoft/documentation.ai.png";
import DeveloperTool from "../../../../../images/Microsoft/developer-tool.png";
import CommunityCall from "../../../../../images/Microsoft/community-call.png";
import Blog from "../../../../../images/Microsoft/blog-page.png";
import QA from "../../../../../images/Microsoft/faq.png";
import { IoIosArrowForward } from "react-icons/io";

const PowerPointInfo = () => {
    return (
        <>
            <div>
                <section className="mt-10 mx-4 md:mx-10 lg:mx-40 pb-8">
                    <div className="mx-auto mt-8 grid justify-center gap-4 sm:grid-cols-2 md:max-w-[80rem] md:grid-cols-1 lg:grid-cols-2">
                        <div className="relative overflow-hidden rounded-md border bg-white p-2">
                            <div className="flex flex-col justify-between h-full rounded-md p-2">
                                <div className='mt-2 mb-4 text-4xl sm:text-6xl'>
                                    <img src={powerpoint_addin} alt="powerpoint addin" className="h-auto max-h-32 md:max-h-40 lg:max-h-48 xl:max-h-56" />
                                </div>
                                <div className="space-y-2 flex-grow">
                                    <h3 className="font-bold">Find everything you need to know to create PowerPoint add-ins</h3>
                                </div>
                                <div className="mt-2">
                                    <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/reference/overview/powerpoint-add-ins-reference-overview" target="_blank" className="text-[#0067B8] hover:underline flex flex-row text-sm group">
                                        Learn about JavaScript API for PowerPoint
                                        <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-md border bg-white p-2">
                            <div className="flex flex-col justify-between h-full rounded-md p-2">
                                <div className='mt-2 mb-4 text-4xl sm:text-6xl text-[#1A702F]'>
                                    <img src={script_lab} alt="scriptlab" className="h-auto max-h-32 md:max-h-40 lg:max-h-48 xl:max-h-56" />
                                </div>
                                <div className="space-y-2 flex-grow">
                                    <h3 className="font-bold">Explore PowerPoint Office JS API using Script Lab</h3>
                                </div>
                                <div className="mt-2">
                                    <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/overview/explore-with-script-lab" target="_blank" className="text-[#0067B8] hover:underline flex flex-row text-sm group">
                                        Get ScriptLab for PowerPoint
                                        <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto pt-4 pb-4 px-6 lg:px-9">
                    <div className="card rounded-lg bg-gradient-to-br from-[#ffffff] to-[#FF9370]">
                        <h2 className="font-semibold text-2xl md:text-3xl text-center pt-6 pb-2 px-8">PowerPoint developer resources</h2>
                        <div className='flex justify-center'>
                            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                                {[
                                    { img: Documentation, title: "Documentation", link: "https://learn.microsoft.com/en-us/office/dev/add-ins/powerpoint/", linkText: "Read doc" },
                                    { img: DeveloperTool, title: "Code", link: "https://developer.microsoft.com/en-us/microsoft-365/gallery?search=&filterBy=PowerPoint,Samples", linkText: "Download samples" },
                                    { img: CommunityCall, title: "Community Calls", link: "https://pnp.github.io/#community", linkText: "Add to calendar" },
                                    { img: Blog, title: "Blog", link: "https://learn.microsoft.com/en-us/training/browse/?roles=developer&expanded=office&products=office-add-ins", linkText: "Stay current" },
                                    { img: QA, title: "Microsoft Q&A forum", link: "https://learn.microsoft.com/en-us/answers/tags/163/office-powerpoint", linkText: "Ask a question" },
                                ].map((item, index) => (
                                    <div key={index} className="flex flex-col justify-between items-center h-48 w-48 p-4">
                                        <div className='flex flex-col items-center'>
                                            <div className='flex justify-center items-center mb-8'>
                                                <img src={item.img} alt={item.title} className='h-24 w-20' />
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

                <div className='bg-[#FFFFFF]'>
                    <section className="mt-2 mx-4 md:mx-12 lg:mx-12 pb-8">
                        <p className="font-semibold text-xl md:text-2xl pt-12 lg:text-4xl text-center">What's new in PowerPoint development</p>
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
                                        <h3 className="font-bold">PowerPoint Tutorial (yo office) - Completed</h3>
                                    </div>
                                    <div className="mt-8">
                                        <a href="https://github.com/OfficeDev/Office-Add-in-samples/tree/main/Samples/tutorials/powerpoint-tutorial-yo" target="_blank" className="text-[#0067B8] hover:underline flex flex-row text-sm group">
                                            View code sample
                                            <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-md border bg-white p-2">
                                <div className="flex flex-col justify-between h-full rounded-md p-2">
                                    <div className="space-y-2 flex-grow">
                                        <h3 className="font-bold">PowerPoint Tutorial (Visual Studio) - Completed</h3>
                                    </div>
                                    <div className="mt-8">
                                        <a href="https://github.com/OfficeDev/Office-Add-in-samples/tree/main/Samples/tutorials/powerpoint-tutorial" target="_blank" className="text-[#0067B8] hover:underline flex flex-row text-sm group">
                                            View code sample
                                            <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="mb-12 bg-[#FFFFFF] flex justify-center items-center">
                    <a target="_blank" href="https://developer.microsoft.com/en-us/microsoft-365/gallery?search=&filterBy=PowerPoint" className="text-[#0067B8] hover:underline flex flex-row text-sm group">
                        View more
                        <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default PowerPointInfo;
