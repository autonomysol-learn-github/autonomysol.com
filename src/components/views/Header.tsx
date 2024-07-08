/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Autonomysol from "../../images/office.png";
import UIText from '../utils/Text';
import Upwork from "../../images/upwork.png";

const Navbar: React.FC = () => {
    const [navigationMenuOpen, setNavigationMenuOpen] = useState<boolean>(false);
    const [navigationMenu, setNavigationMenu] = useState<string>('');

    const navigationMenuReposition = (navElement: HTMLElement | null) => {
        const navigationDropdown = document.getElementById('navigationDropdown');
        if (navigationDropdown && navElement) {
            navigationDropdown.style.left = `${navElement.offsetLeft}px`;
            navigationDropdown.style.marginLeft = `${navElement.offsetWidth / 2}px`;
        }
    };

    const toggleNavigationMenu = (menu: string) => {
        if (navigationMenu === menu) {
            setNavigationMenuOpen(!navigationMenuOpen);
        } else {
            setNavigationMenuOpen(true);
            setNavigationMenu(menu);
        }
        navigationMenuReposition(document.getElementById(menu));
    };

    const navigationMenuClose = () => {
        setNavigationMenuOpen(false);
        setNavigationMenu('');
    };
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center mx-12 py-4 px-1">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Autonomysol} className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{UIText.navbar.Name}</span>
                    </a>
                    <div className="border-l-2 border-black h-6 w-4 ml-8"></div>
                    <button onClick={() => toggleDropdown()} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto px-5" id="navbar-multi-level">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent group">Home <div className="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></a>
                            </li>
                            <li className="relative" id="dropdownNavbar">
                                <button onClick={() => toggleNavigationMenu('getting-started')} className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                    Dropdown
                                    <svg className="w-2.5 h-2.5 mt-1.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                <div id="navigationDropdown" className={`absolute top-0 pt-0 duration-200 ease-out -translate-x-1/2 translate-y-11 ${navigationMenuOpen ? '' : 'hidden'}`} x-cloak="true">
                                    <div className="flex justify-center w-auto h-auto overflow-hidden bg-white border rounded-md shadow-sm border-neutral-200/70">
                                        <div className={`flex items-stretch justify-center w-full max-w-2xl p-6 gap-x-3 ${navigationMenu === 'getting-started' ? '' : 'hidden'}`}>
                                            <div className="flex-shrink-0 w-48 rounded pt-28 pb-7 bg-gradient-to-br from-neutral-800 to-black">
                                                <div className="relative px-7 space-y-1.5 text-white">
                                                    <svg className="block w-auto h-9" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M67.683 89.217h44.634l30.9 53.218H36.783l30.9-53.218Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M77.478 120.522h21.913v46.956H77.478v-46.956Zm-34.434-29.74 45.59-78.26 46.757 78.26H43.044Z" fill="currentColor" /></svg>
                                                    <span className="block font-bold">Pines UI</span>
                                                    <span className="block text-sm opacity-60">An Alpine and Tailwind UI library</span>
                                                </div>
                                            </div>
                                            <div className="w-72">
                                                <a href="#_" onClick={() => navigationMenuClose()} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                                                    <span className="block mb-1 font-medium text-black">Introduction</span>
                                                    <span className="block font-light leading-5 opacity-50">Re-usable elements built using Alpine JS and Tailwind CSS.</span>
                                                </a>
                                                <a href="#_" onClick={() => navigationMenuClose()} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                                                    <span className="block mb-1 font-medium text-black">How to use</span>
                                                    <span className="block leading-5 opacity-50">Couldn't be easier. It's is as simple as copy, paste, and preview.</span>
                                                </a>
                                                <a href="#_" onClick={() => navigationMenuClose()} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                                                    <span className="block mb-1 font-medium text-black">Contributing</span>
                                                    <span className="block leading-5 opacity-50">Feel free to contribute your expertise. All these elements are open-source.</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent group">Services <div className="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent group">Pricing <div className="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent group">Contact <div className="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></a>
                            </li>
                            <li className="relative" id="dropdownNavbar">
                                <button onClick={() => toggleNavigationMenu('learn-more')} className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                    Dropdown
                                    <svg className="w-2.5 h-2.5 mt-1.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                <div id="navigationDropdown" className={`absolute top-0 pt-0 duration-200 ease-out -translate-x-1/2 translate-y-11 ${navigationMenuOpen ? '' : 'hidden'}`} x-cloak="true">
                                    <div className="flex justify-center w-auto h-auto overflow-hidden bg-white border rounded-md shadow-sm border-neutral-200/70">
                                        <div className={`flex items-stretch justify-center w-full p-6 ${navigationMenu === 'learn-more' ? '' : 'hidden'}`}>
                                            <div className="w-72">
                                                <a href="#_" onClick={() => navigationMenuClose()} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                                                    <span className="block mb-1 font-medium text-black">Tailwind CSS</span>
                                                    <span className="block font-light leading-5 opacity-50">A utility first CSS framework for building amazing websites.</span>
                                                </a>
                                                <a href="#_" onClick={() => navigationMenuClose()} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                                                    <span className="block mb-1 font-medium text-black">Laravel</span>
                                                    <span className="block font-light leading-5 opacity-50">The perfect all-in-one framework for building amazing apps.</span>
                                                </a>
                                                <a href="#_" onClick={() => navigationMenuClose()} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                                                    <span className="block mb-1 font-medium text-black">Pines UI</span>
                                                    <span className="block leading-5 opacity-50">An Alpine JS and Tailwind CSS UI library for awesome people. </span>
                                                </a>
                                            </div>
                                            <div className="w-72">
                                                <a href="#_" onClick={() => navigationMenuClose()} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                                                    <span className="block mb-1 font-medium text-black">ApineJS</span>
                                                    <span className="block font-light leading-5 opacity-50">A framework without the complex setup or heavy dependencies.</span>
                                                </a>
                                                <a href="#_" onClick={() => navigationMenuClose()} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                                                    <span className="block mb-1 font-medium text-black">Livewire</span>
                                                    <span className="block leading-5 opacity-50">A seamless integration of server-side and client-side interactions.</span>
                                                </a>
                                                <a href="#_" onClick={() => navigationMenuClose()} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                                                    <span className="block mb-1 font-medium text-black">Tails</span>
                                                    <span className="block leading-5 opacity-50">The ultimate Tailwind CSS design tool that helps you craft beautiful websites.</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="ml-auto flex items-center space-x-3">
                        <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <a href="https://www.upwork.com/freelancers/~013b873e7c2deadb02">
                                <img src={Upwork} className="h-8" alt="Upwork Logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;