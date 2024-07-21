import React, { useState } from 'react';
import Loader from '../../../Loader/Loader';
import useLoader from '../../../utils/useLoader';
import contact_us from '../../../../images/Microsoft/contact-us.png';
import UploadFiles from './UploadFiles';

const SendEmail = () => {
    const loading = useLoader();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call or any asynchronous operation
        setTimeout(() => {
            // Log form data
            console.log(formData);

            // Reset form or clear formData state if needed
            setFormData({
                fullName: '',
                email: '',
                message: ''
            });

            setIsLoading(false);
        }, 3000);
    };

    return (
        <>
            {(loading || isLoading) && <Loader />}
            <div className="text-gray-100 px-8 mx-0 md:mx-6 lg:mx-6 my-8">
                <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">Let's talk about everything!</h2>
                            <div className="text-gray-700 mt-2">
                                Have questions or need assistance? Feel free to reach out to our dedicated support team.
                                We're here to help you with any inquiries regarding our services or to assist with your
                                development needs. Get in touch today and experience the Autonomy Sol commitment firsthand.
                            </div>
                        </div>
                        <div className="mt-2 md:mt-8 lg:mt-8 mr-8 text-center">
                            <img src={contact_us} alt="contact img" />
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                            <input
                                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:bg-white"
                                type="text" placeholder=""
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange} />
                        </div>

                        <div className="mt-8">
                            <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                            <input
                                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:bg-white"
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange} />
                        </div>

                        <div className="mt-8">
                            <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                            <textarea
                                className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:bg-white"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}></textarea>
                        </div>

                        <UploadFiles />
                        <div className="mt-8">
                            <button
                                type="submit"
                                className="uppercase text-sm font-semibold tracking-wide bg-[#0067B8] hover:opacity-80 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SendEmail;
