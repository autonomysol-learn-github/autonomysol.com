import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8 fixed bottom-0 w-full" style={{ backgroundColor: '#F2F2F2' }}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Column 1 */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">What's new</h2>
                        <ul>
                            <li>Surface Book 3</li>
                            <li>Surface Pro</li>
                            <li>Microsoft Copilot</li>
                            <li>Microsoft 365</li>
                            <li>Windows 11 apps</li>
                            <li>Microsoft Store</li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Account profile</h2>
                        <ul>
                            <li>Download Center</li>
                            <li>Microsoft Store Support</li>
                            <li>Extended holiday returns</li>
                            <li>Order tracking</li>
                            <li>Support</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Education</h2>
                        <ul>
                            <li>Microsoft in education</li>
                            <li>Devices for education</li>
                            <li>Microsoft Teams for Education</li>
                            <li>Microsoft 365 Education</li>
                            <li>Office Education</li>
                            <li>Educator training and development</li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Developer & IT</h2>
                        <ul>
                            <li>Developer Center</li>
                            <li>Documentation</li>
                            <li>Microsoft Learn</li>
                            <li>Microsoft Tech Community</li>
                            <li>Azure Marketplace</li>
                            <li>AppSource</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
