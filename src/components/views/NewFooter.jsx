/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import autonomy_sol from '../../images/AutonomySol.png';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";

const NewFooter = () => {
    return (
        <>
            <footer className="bg-gray-200 text-black dark:bg-gray-900 dark:text-white">
                <div className="container mx-auto p-0 md:p-8 xl:px-0">
                    <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
                        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                            <div className="space-y-4">
                                <div>
                                    <a href="/autonomysol.com">
                                        <div className="flex items-center space-x-2 text-2xl font-medium">
                                            <span>
                                                <img
                                                    src={autonomy_sol}
                                                    alt="AI Logo"
                                                    width={40}
                                                    height={40}
                                                />
                                            </span>
                                            <span className='hover:opacity-80'>Autonomy Sol</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="max-w-md pr-16 text-md">
                                    Autonmy Sol is a leading development company crafting cutting-edge software solutions.
                                    We excel in delivering tailored applications that drive business success.
                                </div>
                                <div className="flex mt-2 space-x-2">
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="hover:opacity-80"
                                    >
                                        <span className="sr-only">Linkedin</span>
                                        <FaLinkedin className='h-6 w-6' />
                                    </a>
                                    <a
                                        href="https://github.com/aamirhusnain"
                                        target="_blank"
                                        className="hover:opacity-80"
                                    >
                                        <span className="sr-only">Github</span>
                                        <FaGithub className='h-6 w-6' />
                                    </a>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="hover:opacity-80"
                                    >
                                        <span className="sr-only">Twitter</span>
                                        <FaTwitter className='h-6 w-6' />
                                    </a>
                                    <a
                                        href="https://app.slack.com/client/T06RJ19R5CJ/D06RBED63QW"
                                        target="_blank"
                                        className="hover:opacity-80"
                                    >
                                        <span className="sr-only">Slack</span>
                                        <FaSlack className='h-6 w-6' />
                                    </a>
                                </div>
                            </div>
                            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                                <div className="md:grid md:grid-cols-2 md:gap-8">
                                    <div>
                                        <h3 className="text-md font-semibold leading-6">What's new</h3>
                                        <ul role="list" className="mt-6 space-y-4">
                                            <li><a href="#" className="group text-sm inline-block hover:opacity-80">Surface Pro<div className="bg-black opacity-80 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></a></li>
                                            <li><a href="#" className="group text-sm inline-block hover:opacity-80">Microsoft Copilot<div className="bg-black opacity-80 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></a></li>
                                            <li><a href="#" className="group text-sm inline-block hover:opacity-80">Microsoft 365<div className="bg-black opacity-80 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></a></li>
                                            <li><a href="#" className="group text-sm inline-block hover:opacity-80">Windows 11 apps<div className="bg-black opacity-80 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></a></li>
                                        </ul>
                                    </div>
                                    <div className="mt-10 md:mt-0">
                                        <h3 className="text-md font-semibold leading-6">Support</h3>
                                        <ul role="list" className="mt-6 space-y-4">
                                            <li><a href="#" className="group text-sm inline-block hover:opacity-80">Account profile<div className="bg-black opacity-80 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></a></li>
                                            <li><a href="#" className="group text-sm inline-block hover:opacity-80">Download Center<div className="bg-black opacity-80 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></a></li>
                                            <li><a href="#" className="group text-sm inline-block hover:opacity-80">Returns<div className="bg-black opacity-80 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></a></li>
                                            <li><a href="#" className="group text-sm inline-block hover:opacity-80">Crtified Refurbished<div className="bg-black opacity-80 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="md:grid md:grid-cols-2 md:gap-8">
                                    <div>
                                        <h3 className="text-md font-semibold leading-6">Developer & IT</h3>
                                        <ul role="list" className="mt-6 space-y-4">
                                            <li><a href="#" className="group text-sm inline-block hover:opacity-80">Developer Center<div className="bg-black opacity-80 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></a></li>
                                            <li><a href="#" className="group text-sm inline-block hover:opacity-80">Documentation<div className="bg-black opacity-80 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></a></li>
                                            <li><a href="#" className="group text-sm inline-block hover:opacity-80">Microsoft Learn<div className="bg-black opacity-80 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></a></li>
                                            <li><a href="#" className="group text-sm inline-block hover:opacity-80">Azure Marketplace<div className="bg-black opacity-80 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></a></li>
                                        </ul>
                                    </div>
                                    <div className="mt-10 md:mt-0">
                                        <h3 className="text-md font-semibold leading-6">Business</h3>
                                        <ul role="list" className="mt-6 space-y-4">
                                            <li><a href="#" className="group text-sm inline-block hover:opacity-80">Microsoft Cloud<div className="bg-black opacity-80 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></a></li>
                                            <li><a href="#" className="group text-sm inline-block hover:opacity-80">Microsoft Security<div className="bg-black opacity-80 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></a></li>
                                            <li><a href="#" className="group text-sm inline-block hover:opacity-80">Azure<div className="bg-black opacity-80 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></a></li>
                                            <li><a href="#" className="group text-sm inline-block hover:opacity-80">Dynamics 365<div className="bg-black opacity-80 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16 border-t border-gray-400/30 dark:border-white pt-8 sm:mt-20 lg:mt-24">
                            <div className="text-md text-center">
                                Copyright © 2024.  All rights reserved by Autonomy Sol.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default NewFooter;
