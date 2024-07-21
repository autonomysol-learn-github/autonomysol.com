/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import gril_image from "../../../../images/Microsoft/OfficeSolutions.png"
import Documentation from "../../../../images/Microsoft/documentation.ai.png";
import DeveloperTool from "../../../../images/Microsoft/developer-tool.png";
import CommunityCall from "../../../../images/Microsoft/community-call.png";
import Blog from "../../../../images/Microsoft/blog-page.png";
import QA from "../../../../images/Microsoft/faq.png";
import Suggestions from "../../../../images/Microsoft/suggestion.png";
import ScriptLab from "../../../../images/Microsoft/script-logo.png";
import OfficeScript from "../../../../images/Microsoft/office-script.png";
import FluentUi from "../../../../images/Microsoft/fluent-ui.png";
import { IoIosArrowForward } from "react-icons/io";

const BasicTools = () => {
    return (
        <>
            <div className='bg-[#F2F2F2]'>
                <section id="features" className="px-2 space-y-6 py-8 md:py-12 lg:py-8 max-w-8xl sm:mx-2 md:mx-8 lg:mx-auto">
                    <section className="mt-2 mx-auto md:mx-8 lg:mx-auto pb-8">
                        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                            <h2 className="font-semibold text-2xl md:text-4xl text-center">Featured tools</h2>
                            <p className="sm:max-w-[100%] md:max-w-[60%] lg:max-w-[60%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                                Tools to empower your creative journey, enabling you to bring your artistic
                                visions to life effortlessly.</p>
                        </div>
                        <div className="mx-auto mt-8 grid justify-center gap-4 sm:grid-cols-2 md:max-w-[80rem] md:grid-cols-2 lg:grid-cols-4">
                            <div className="relative overflow-hidden rounded-md bg-white p-2">
                                <div className="flex flex-col justify-between h-full p-2">
                                    <div className='mt-2 mb-4 text-6xl'>
                                        <img src={ScriptLab} alt="ScriptLab" className="h-24 w-24" />
                                    </div>
                                    <h3 className="font-bold">Script Lab</h3>
                                    <p className="text-sm pt-2 text-muted-foreground">
                                        Use Office Scripts in Excel on the web to automate your common tasks. Learn how to create and edit Office Scripts and get started automating today.
                                    </p>
                                    <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/overview/explore-with-script-lab" target="_blank" className="text-[#0067B8] py-4 hover:underline flex flex-row text-sm group">
                                        Explore Script Lab
                                        <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-md bg-white p-2">
                                <div className="flex flex-col justify-between h-full p-2">
                                    <div className='mt-2 mb-4 text-6xl'>
                                        <img src={OfficeScript} alt="OfficeScript" className="h-24 w-24" />
                                    </div>
                                    <h3 className="font-bold">Office Scripts</h3>
                                    <p className="text-sm pt-2 text-muted-foreground">
                                        Use Office Scripts in Excel on the web to automate your common tasks. Learn how to create and edit Office Scripts and get started automating today.
                                    </p>
                                    <a href="https://developer.microsoft.com/en-us/office-scripts" target="_blank" className="text-[#0067B8] py-4 hover:underline flex flex-row text-sm group">
                                        Explore Script Lab
                                        <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-md bg-white p-2">
                                <div className="flex flex-col justify-between h-full p-2">
                                    <div className='mt-2 mb-4 text-6xl'>
                                        <img src={FluentUi} alt="FluentUi" className="h-24 w-24" />
                                    </div>
                                    <h3 className="font-bold">Fluent UI</h3>
                                    <p className="text-sm pt-2 text-muted-foreground">
                                        The official front-end framework for building experiences that fit seamlessly into Microsoft 365.
                                    </p>
                                    <a href="https://developer.microsoft.com/en-us/fluentui#/" target="_blank" className="text-[#0067B8] py-4 hover:underline flex flex-row text-sm group">
                                        Explore Script Lab
                                        <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-md bg-white p-2">
                                <div className="flex flex-col justify-between h-full p-2">
                                    <div className='mt-2 mb-4 text-6xl'>
                                        <img src={DeveloperTool} alt="DeveloperTool" className="h-24 w-24" />
                                    </div>
                                    <h3 className="font-bold">Developer tools</h3>
                                    <p className="text-sm pt-2 text-muted-foreground">
                                        Use our developer tools to build solutions for consumer and professional markets.
                                    </p>
                                    <a href="https://visualstudio.microsoft.com/vs/features/office-tools/" target="_blank" className="text-[#0067B8] py-4 hover:underline flex flex-row text-sm group">
                                        Explore Script Lab
                                        <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="max-w-md mx-auto w-full bg-white rounded-xl shadow-md overflow-hidden md:max-w-7xl">
                        <div className="md:flex">
                            <div className="md:shrink-0">
                                <img className="h-48 w-full object-cover md:h-full md:w-[450px]" src={gril_image} />
                            </div>
                            <div className="p-4 md:p-10 lg:p-10 bg-gradient-to-br from-[#F4F2F3] to-[#006DC1]">
                                <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold mb-2">Bring your Office solutions to market</h2>
                                <p className="text-sm lg:text-base">Submit your Office app to Microsoft AppSource to make it available to millions of consumers and businesses. Explore the expanding list of Office Add-ins partner apps and find inspiration for your own solutions.</p>
                                <div className='flex flex-col md:flex-col lg:flex-row gap-2 items-center mt-4'>
                                    <button className="inline-flex items-center px-3 py-2 text-sm font-small md:font-medium lg:font-medium text-white bg-[#006DC1] rounded-md hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 group">
                                        <a href="https://appsource.microsoft.com/en-US/marketplace/apps?product=office%3Bofficemetaos%3Bexcel%3Boutlook%3Bpowerpoint%3Bword&page=1" target="_blank" className="text-[#ffffff] flex flex-row text-sm group">
                                            Learn more about Office Add-ins
                                            <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="container mx-auto pt-4 pb-4 px-6 lg:px-9">
                        <div className="card rounded-lg">
                            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                                <h2 className="font-semibold text-xl md:text-4xl lg:text-4xl text-center">Office developer resources</h2>
                                <p className="max-w-[100%] md:max-w-[85%] lg:max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                                    Tools to empower your creative journey, enabling you to bring your artistic
                                    visions to life effortlessly.
                                </p>
                            </div>
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
                                                    <img src={item.img} alt={item.title} className='h-20 w-20' />
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
            </div>
        </>
    );
}

export default BasicTools;