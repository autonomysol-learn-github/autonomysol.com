/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import GrilImage from "../../../../images/Microsoft/OfficeSolutions.png"
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
        <div className='bg-[#F2F2F2]'>
            <section id="features" className="px-2 space-y-6 py-8 md:py-12 lg:py-8 max-w-8xl mx-8">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-semibold text-2xl md:text-4xl text-center">Featured tools</h2>
                    <p className="max-w-[60%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Tools to empower your creative journey, enabling you to bring your artistic
                        visions to life effortlessly.</p>
                </div>

                <div className="mx-auto z-20 grid justify-center gap-4 sm:grid-cols-2 md:max-w-[80rem] md:grid-cols-2 lg:grid-cols-4">
                    <div className="relative overflow-hidden rounded-lg border bg-white p-2">
                        <div className="flex flex-col justify-between h-full rounded-md p-2">
                            <img src={ScriptLab} alt="ScriptLab" className="h-24 w-24" />
                            <div className="space-y-2 p-4 flex-grow">
                                <h3 className="font-bold">Script Lab</h3>
                                <p className="text-sm text-muted-foreground">
                                    Script lab is an Office JavaScript API tool for anyone who wants to learn about writing Office add-ins for Word, Excel, PowerPoint, or Outlook.
                                </p>
                            </div>
                            <div className="px-4 mt-auto">
                                <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/overview/explore-with-script-lab" target="_blank" className="text-[#0067B8] hover:underline flex flex-row text-sm group">
                                    Explore Script Lab
                                    <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-lg border bg-white p-2">
                        <div className="flex flex-col justify-between h-full rounded-md p-2">
                            <img src={OfficeScript} alt="OfficeScript" className="h-24 w-24" />
                            <div className="space-y-2 p-4 flex-grow">
                                <h3 className="font-bold">Office Scripts</h3>
                                <p className="text-sm text-muted-foreground">
                                    Use Office Scripts in Excel on the web to automate your common tasks. Learn how to create and edit Office Scripts and get started automating today.
                                </p>
                            </div>
                            <div className="px-4 mt-auto">
                                <a href="https://developer.microsoft.com/en-us/office-scripts" target="_blank" className="text-[#0067B8] hover:underline flex flex-row text-sm group">
                                    Explore Script Lab
                                    <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-lg border bg-white p-2">
                        <div className="flex flex-col justify-between h-full rounded-md p-2">
                            <img src={FluentUi} alt="FluentUi" className="h-24 w-24" />
                            <div className="space-y-2 p-4 flex-grow">
                                <h3 className="font-bold">Fluent UI</h3>
                                <p className="text-sm text-muted-foreground">
                                    The official front-end framework for building experiences that fit seamlessly into Microsoft 365.
                                </p>
                            </div>
                            <div className="px-4 mt-auto">
                                <a href="https://developer.microsoft.com/en-us/fluentui#/" target="_blank" className="text-[#0067B8] hover:underline flex flex-row text-sm group">
                                    Explore Script Lab
                                    <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-lg border bg-white p-2">
                        <div className="flex flex-col justify-between h-full rounded-md p-2">
                            <img src={DeveloperTool} alt="DeveloperTool" className="h-24 w-24" />
                            <div className="space-y-2 p-4 flex-grow">
                                <h3 className="font-bold">Developer tools</h3>
                                <p className="text-sm text-muted-foreground">
                                    Use our developer tools to build solutions for consumer and professional markets.
                                </p>
                            </div>
                            <div className="px-4 mt-auto">
                                <a href="https://visualstudio.microsoft.com/vs/features/office-tools/" target="_blank" className="text-[#0067B8] hover:underline flex flex-row text-sm group">
                                    Explore Script Lab
                                    <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-7xl">
                    <div className="md:flex">
                        <div className="md:shrink-0">
                            <img className="h-48 w-full object-cover md:h-full md:w-[450px]" src={GrilImage} />
                        </div>
                        <div className="p-10 bg-gradient-to-br from-[#F4F2F3] to-[#4A91F4]">
                            <h2 className="text-3xl leading-[1.1] sm:text-3xl md:text-3xl font-semibold">Bring your Office solutions to market
                            </h2>
                            <p className="py-4 text-md">Submit your Office app to Microsoft AppSource to make it available to millions of consumers and businesses. Explore the expanding list of Office Add-ins partner apps and find inspiration for your own solutions.
                            </p>
                            <button className="px-3 py-2 min-w-[120px] text-center rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Diccover Office apps on AppSource</button>
                        </div>
                    </div>
                </div>

                <section className="container mx-auto pt-4 pb-4 px-6 lg:px-9">
                    <div className="card rounded-lg">
                        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                            <h2 className="font-semibold text-2xl md:text-4xl text-center">Office developer resources</h2>
                            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
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
    );
}

export default BasicTools;