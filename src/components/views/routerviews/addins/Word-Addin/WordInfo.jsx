/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { CiBoxes } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { GoTools } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import Documentation from "../../../../../images/Microsoft/documentation.ai.png";
import DeveloperTool from "../../../../../images/Microsoft/developer-tool.png";
import CommunityCall from "../../../../../images/Microsoft/community-call.png";
import Blog from "../../../../../images/Microsoft/blog-page.png";
import QA from "../../../../../images/Microsoft/faq.png";
import Suggestions from "../../../../../images/Microsoft/suggestion.png";

const WordInfo = () => {
    return (
        <>
            <section className="px-2 w-full space-y-6 bg-[#F2F2F2] py-8 md:py-12 lg:py-8 max-w-8xl mx-auto">
                <div className="flex mx-10 flex-col space-y-4">
                    <h2 className="font-semibold text-2xl md:text-3xl text-center">What can I do with Word?</h2>
                </div>

                <section className="mt-20 w-full mx-2 md:mx-12 lg:mx-12 pb-8">
                    <div className="mx-auto mt-8 grid justify-center gap-4 sm:grid-cols-2 md:max-w-[80rem] md:grid-cols-2 lg:grid-cols-3">
                        <div className="relative overflow-hidden rounded-md border bg-white p-2">
                            <div className="flex flex-col justify-between h-full rounded-md p-2">
                                <div className='mt-2 mb-4 text-5xl text-[#0067B8]'>
                                    <CiBoxes />
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
                                <div className='mt-2 mb-4 text-5xl text-[#0067B8]'>
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
                                <div className='mt-2 mb-4 text-5xl text-[#0067B8]'>
                                    <GoTools />
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

                <section className="container w-full mx-auto pt-4 pb-4 px-6 lg:px-9">
                    <div className="card rounded-lg bg-gradient-to-br from-[#ffffff] to-[#90C9E8]">
                        <h2 className="font-semibold text-2xl md:text-3xl text-center pt-6 pb-2 px-8">Word developer resources</h2>
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

            <div className='bg-[#FFFFFF]'>
                <section className="mt-2 mx-4 md:mx-12 lg:mx-12 pb-8">
                    <p className="font-semibold text-2xl pt-6 md:text-4xl text-center">What's new in Word development</p>
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
                                    <h3 className="font-bold">Import templates in a Word document</h3>
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
                                    <h3 className="font-bold">What's new for Office Add-ins at Build 2024</h3>
                                </div>
                                <div className="mt-8">
                                    <a href="https://github.com/OfficeDev/Office-Add-in-samples/tree/main/Samples/auth/Office-Add-in-SSO-NAA" target="_blank" className="text-[#0067B8] hover:underline flex flex-row text-sm group">
                                        View code sample
                                        <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto mt-8 grid justify-center gap-4 sm:grid-cols-2 md:max-w-[80rem] md:grid-cols-2 lg:grid-cols-4">
                        <div className="relative overflow-hidden rounded-md border bg-white p-2">
                            <div className="flex flex-col justify-between h-full rounded-md p-2">
                                <div className="space-y-2 flex-grow">
                                    <h3 className="font-bold">Maximize your Office Add-in success with free Microsoft Partner programs</h3>
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
                                    <h3 className="font-bold">Word JavaScript API 1.7 requirement set now available</h3>
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
                                    <h3 className="font-bold">Stay ahead of the game with the latest updates to the Microsoft 365 Developer Program</h3>
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
                                    <h3 className="font-bold">Best practices for designing Word, Excel, and PowerPoint add-ins</h3>
                                </div>
                                <div className="mt-8">
                                    <a href="https://github.com/OfficeDev/Office-Add-in-samples/tree/main/Samples/auth/Office-Add-in-SSO-NAA" className="text-[#0067B8] hover:underline flex flex-row text-sm group">
                                        View code sample
                                        <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mb-12 flex justify-center items-center">
                    <a target="_blank" href="https://developer.microsoft.com/en-us/microsoft-365/gallery/?filterBy=word" className="text-[#0067B8] hover:underline flex flex-row text-sm group">
                        View more Word developer resources
                        <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default WordInfo;
