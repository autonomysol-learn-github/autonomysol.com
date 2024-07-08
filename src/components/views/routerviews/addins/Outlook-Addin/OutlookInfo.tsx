/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import outlook_event from "../../../../../images/Microsoft/outlook-event-based-business-solution.png";
import outlook_hybrid from "../../../../../images/Microsoft/outlook-hybrid-working-environment.png";
import outlook_cross from "../../../../../images/Microsoft/outlook-cross-platform-apps.png";
import devportal from "../../../../../images/Microsoft/devportal.png";
import community from "../../../../../images/Microsoft/community.png";
import { IoIosArrowForward } from 'react-icons/io';

const OutlookInfo: React.FC = () => {
    return (
        <>
            <div>
                <div className='w-full my-6'>
                    <div className="flex flex-wrap justify-center">
                        <div className="mx-4 md:mx-12 lg:mx-12 flex flex-col items-center w-full bg-[#243A5E] rounded-md">
                            <p className='text-xl lg:text-3xl xl:text-3xl text-center font-semibold text-[#50E6FF] mt-8 mb-6'>Integrate your business solutions into Outlook</p>

                            <div className="max-w-md mx-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-7xl">
                                <div className="md:flex">
                                    <div className="md:w-2/5">
                                        <img src={outlook_event} alt='outlook hybrid' className="h-auto w-full object-cover md:h-full" />
                                    </div>
                                    <div className="p-4 sm:p-4 md:p-10 lg:p-10 bg-white md:w-3/5">
                                        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold mb-2">Use the power of event-based add-ins</h2>
                                        <p className="text-sm lg:text-base">Enable users to access your solutions via common Outlook actions such as composing a new email, adding a recipient, or adding an attachment.</p>
                                        <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/outlook/autolaunch" target="_blank" className="text-[#0067B8] hover:underline flex flex-row font-semibold text-sm pt-4 group">
                                            Configure your Outlook add-in for event-based activation
                                            <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                        <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/outlook/use-sso-in-event-based-activation" target="_blank" className="text-[#0067B8] hover:underline flex flex-row font-semibold text-sm pt-2 group">
                                            Enable single sign-on (SSO) in Outlook add-ins that use event-based activation
                                            <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="max-w-md mx-8 my-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-7xl">
                                <div className="md:flex">
                                    <div className="md:w-2/5">
                                        <img src={outlook_hybrid} alt='outlook event' className="h-auto w-full object-cover md:h-full" />
                                    </div>
                                    <div className="p-4 sm:p-4 md:p-10 lg:p-10 bg-white md:w-3/5">
                                        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold mb-2">Use the power of event-based add-ins</h2>
                                        <p className="text-sm lg:text-base">Enable users to access your solutions via common Outlook actions such as composing a new email, adding a recipient, or adding an attachment.</p>
                                        <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/outlook/smart-alerts-onmessagesend-walkthrough?tabs=jsonmanifest" target="_blank" className="text-[#0067B8] hover:underline flex flex-row font-semibold text-sm pt-4 group">
                                            Use Smart Alerts events in your Outlook add-in
                                            <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                        <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/outlook/online-meeting?tabs=jsonmanifest" target="_blank" className="text-[#0067B8] hover:underline flex flex-row font-semibold text-sm pt-2 group">
                                            Create an Outlook add-in for an online-meeting provider
                                            <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="max-w-md mx-8 mt-4 mb-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-7xl">
                                <div className="md:flex">
                                    <div className="md:w-2/5">
                                        <img src={outlook_cross} alt='outlook cross' className="h-auto w-full object-cover md:h-full" />
                                    </div>
                                    <div className="p-4 sm:p-4 md:p-10 lg:p-10 bg-white md:w-3/5">
                                        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold mb-2">Enable better collaboration in a hybrid working environment</h2>
                                        <p className="text-sm lg:text-base">Help your users to be more productive in hybrid or remote environments by sending better emails. Smart Alerts events such as <span className='font-semibold'>OnMessageSend</span> and <span className='font-semibold'>OnAppointmentSend</span> allow your users to improve their emails and meeting invites before they're sent.</p>
                                        <a href="https://github.com/OfficeDev/Office-Add-in-samples/tree/main/Samples/auth/Office-Add-in-SSO-NAA" target="_blank" className="text-[#0067B8] hover:underline flex flex-row font-semibold text-sm pt-4 group">
                                            Configure your Outlook add-in for event-based activation
                                            <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                        <a href="https://github.com/OfficeDev/Office-Add-in-samples/tree/main/Samples/auth/Office-Add-in-SSO-NAA" target="_blank" className="text-[#0067B8] hover:underline flex flex-row font-semibold text-sm pt-2 group">
                                            Enable single sign-on (SSO) in Outlook add-ins that use event-based activation
                                            <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full my-6'>
                    <div className="flex flex-wrap justify-center">
                        <div className="mx-4 md:mx-12 lg:mx-12 flex flex-col w-full bg-[#F2F2F2] rounded-md">
                            <p className='text-xl lg:text-3xl xl:text-3xl text-left px-4 lg:px-8 font-semibold mt-8 mb-2'>Community</p>
                            <p className='text-md lg:text-lg xl:text-lg text-left px-4 lg:px-8 font-semibold'>Learn. Share. Connect. Grow.</p>

                            <div className="mx-0 md:mx-8 lg:mx-8 grid justify-center gap-4 sm:grid-cols-2 md:max-w-[80rem] md:grid-cols-1 lg:grid-cols-2">
                                <div className="p-4 max-w-lghover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center">
                                    <img src={devportal} alt='devportal' className="h-auto rounded-lg w-full object-cover md:h-full" />
                                    <div className="mt-4">
                                        <h4 className="font-semibold text-xl">Join the Microsoft 365 Developer Program</h4>
                                        <p className="mt-2 font-light">Get an instant sandbox preconfigured with sample data and start developing on the Microsoft 365 platform.</p>
                                        <div className="mt-4">
                                            <a href="https://developer.microsoft.com/en-us/microsoft-365/dev-program" target="_blank" className="text-[#0067B8] hover:underline flex flex-row font-semibold text-sm pt-2 group">
                                                Join the Microsoft 365 Developer Program today
                                                <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 max-w-lghover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center">
                                    <img src={community} alt='community' className="h-auto rounded-lg w-full object-cover md:h-full" />
                                    <div className="mt-4">
                                        <h4 className="font-semibold text-xl">Connect with our developer community</h4>
                                        <p className="mt-2 font-light">Don't reinvent the wheel. Learn, share and contribute with others on how to build apps for Outlook and the Microsoft 365 platform.</p>
                                        <div className="mt-4">
                                            <a href="https://pnp.github.io/" target="_blank" className="text-[#0067B8] hover:underline flex flex-row font-semibold text-sm pt-2 group">
                                                Connect with our developer community now
                                                <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#FFFFFF]">
                    <section className="mt-2 mx-4 md:mx-12 lg:mx-12 pb-8">
                        <p className="font-semibold text-2xl pt-12 md:text-4xl text-center">What's new in Outlook development</p>
                        <div className="mx-auto mt-8 grid justify-center gap-4 sm:grid-cols-2 md:max-w-[80rem] md:grid-cols-2 lg:grid-cols-4">
                            <div className="relative overflow-hidden rounded-md border bg-white p-2">
                                <div className="flex flex-col justify-between h-full rounded-md p-2">
                                    <div className="space-y-2 flex-grow">
                                        <h3 className="font-bold">Adaptive cards are everywhere!</h3>
                                    </div>
                                    <div className="mt-8">
                                        <a
                                            href="https://www.youtube.com/watch/pYe2NqKhJoM"
                                            target="_blank"
                                            className="text-[#0067B8] hover:underline flex flex-row text-sm group"
                                        >
                                            View code sample
                                            <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1"></IoIosArrowForward>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-md border bg-white p-2">
                                <div className="flex flex-col justify-between h-full rounded-md p-2">
                                    <div className="space-y-2 flex-grow">
                                        <h3 className="font-bold">
                                            Where do I start Microsoft 365? Teams apps in Teams, Outlook, and Copilot for Microsoft 365
                                        </h3>
                                    </div>
                                    <div className="mt-8">
                                        <a
                                            href="https://www.youtube.com/watch?v=X6Fnhq54dvk"
                                            target="_blank"
                                            className="text-[#0067B8] hover:underline flex flex-row text-sm group"
                                        >
                                            View code sample
                                            <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1"></IoIosArrowForward>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-md border bg-white p-2">
                                <div className="flex flex-col justify-between h-full rounded-md p-2">
                                    <div className="space-y-2 flex-grow">
                                        <h3 className="font-bold">
                                            Where do I start with Microsoft 365 development? Part 1: Office add-in model
                                        </h3>
                                    </div>
                                    <div className="mt-8">
                                        <a
                                            href="https://www.youtube.com/watch?v=EimKkmlHZ4w"
                                            target="_blank"
                                            className="text-[#0067B8] hover:underline flex flex-row text-sm group"
                                        >
                                            View code sample
                                            <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1"></IoIosArrowForward>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-md border bg-white p-2">
                                <div className="flex flex-col justify-between h-full rounded-md p-2">
                                    <div className="space-y-2 flex-grow">
                                        <h3 className="font-bold">
                                            Final reminder: Outlook REST API v2.0 and beta endpoints decommissioning
                                        </h3>
                                    </div>
                                    <div className="mt-8">
                                        <a
                                            href="https://devblogs.microsoft.com/microsoft365dev/final-reminder-outlook-rest-api-v2-0-and-beta-endpoints-decommissioning/"
                                            target="_blank"
                                            className="text-[#0067B8] hover:underline flex flex-row text-sm group"
                                        >
                                            View code sample
                                            <IoIosArrowForward className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 transition-transform duration-300 group-hover:translate-x-1"></IoIosArrowForward>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div >

        </>
    )
}

export default OutlookInfo;
