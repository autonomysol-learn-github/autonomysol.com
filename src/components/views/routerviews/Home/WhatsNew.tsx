/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Whatsnew = () => {
    return (
        <>
            <div className='bg-[#FFFFFF]'>
                <section className="mt-20 mx-8 pb-8">
                    <p className="font-semibold text-2xl md:text-4xl text-center">What's new in Office Add-ins</p>
                    <div className="mx-auto mt-8 grid justify-center gap-4 sm:grid-cols-2 md:max-w-[80rem] md:grid-cols-2 lg:grid-cols-4">
                        <div className="relative overflow-hidden rounded-md border bg-white p-2">
                            <div className="flex flex-col justify-between h-full rounded-md p-2">
                                <div className="space-y-2 flex-grow">
                                    <h3 className="font-bold">Manage citations in a Word document</h3>
                                </div>
                                <div className="mt-12">
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
                                    <h3 className="font-bold">Outlook Tutorial (yo office) - Completed</h3>
                                </div>
                                <div className="mt-12">
                                    <a href="https://github.com/OfficeDev/Office-Add-in-samples/tree/main/Samples/word-import-template" target="_blank" className="text-[#0067B8] hover:underline flex flex-row text-sm group">
                                        View code sample
                                        <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-md border bg-white p-2">
                            <div className="flex flex-col justify-between h-full rounded-md p-2">
                                <div className="space-y-2 flex-grow">
                                    <h3 className="font-bold">Excel Tutorial (yo office) - Completed</h3>
                                </div>
                                <div className="mt-12">
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
                                    <h3 className="font-bold">PowerPoint Tutorial (Visual Studio) - Completed</h3>
                                </div>
                                <div className="mt-12">
                                    <a href="https://github.com/OfficeDev/Office-Add-in-samples/tree/main/Samples/tutorials/excel-tutorial" target="_blank" className="text-[#0067B8] hover:underline flex flex-row text-sm group">
                                        View code sample
                                        <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Whatsnew;