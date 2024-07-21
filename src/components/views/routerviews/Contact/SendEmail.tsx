/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import Loader from '../../../Loader/Loader';
import useLoader from '../../../utils/useLoader';
import contact_us from '../../../../images/Microsoft/contact-us.png';
import ex_files from '../../../../images/Microsoft/file.png';
import doc_file from '../../../../images/Microsoft/doc.png';
import pdf_file from '../../../../images/Microsoft/pdf.png';
import { MdDeleteOutline } from 'react-icons/md';

interface FilePreview {
    name: string;
    type: string;
    url?: string;
}

const SendEmail = () => {
    const isLoading = useLoader();
    const [files, setFiles] = useState<File[]>([]);
    const [filePreviews, setFilePreviews] = useState<FilePreview[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [fileNames, setFileNames] = useState<Set<string>>(new Set()); // Use Set to store file names

    const handleDragOver = (event: React.DragEvent) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent) => {
        event.preventDefault();
        const droppedFiles = Array.from(event.dataTransfer.files);
        processFiles(droppedFiles);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files ? Array.from(event.target.files) : [];
        processFiles(selectedFiles);
    };

    const processFiles = (selectedFiles: File[]) => {
        // Reset error message before processing files
        setErrorMessage(null);

        // Filter out duplicates by comparing with fileNames Set
        const newFiles = selectedFiles.filter(file => !fileNames.has(file.name));
        if (newFiles.length < selectedFiles.length) {
            setErrorMessage('This file is already uploaded.');
        }

        newFiles.forEach(file => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    setFilePreviews(prev => [...prev, { name: file.name, type: file.type, url: reader.result as string }]);
                };
            } else {
                setFilePreviews(prev => [...prev, { name: file.name, type: file.type }]);
            }
        });

        setFiles(prev => [...prev, ...newFiles]);
        setFileNames(prev => {
            const updatedSet = new Set(prev);
            newFiles.forEach(file => updatedSet.add(file.name));
            return updatedSet;
        }); // Update fileNames Set
    };

    const handleDelete = (fileName: string) => {
        setFiles(prev => prev.filter(file => file.name !== fileName));
        setFilePreviews(prev => prev.filter(preview => preview.name !== fileName));
        setFileNames(prev => {
            const updatedSet = new Set(prev);
            updatedSet.delete(fileName);
            return updatedSet;
        }); // Update fileNames Set
    };

    const getFileIcon = (type: string) => {
        switch (type) {
            case 'application/pdf':
                return pdf_file; // PDF icon
            case 'application/msword':
            case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
                return doc_file; // DOC/DOCX icon
            default:
                return ex_files; // Default icon for other file types
        }
    };

    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => {
                setErrorMessage(null);
            }, 6000);
            return () => clearTimeout(timer);
        }
    }, [errorMessage]);

    return (
        <>
            {isLoading && <Loader />}
            <div className="text-gray-100 px-8 mx-0 md:mx-6 lg:mx-6 my-8">
                <div
                    className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
                            <div className="text-gray-700 mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse, est dicta eos tempora illo voluptatum sint nemo sequi minus. Dignissimos suscipit natus possimus, earum nobis vel tempore ducimus libero.
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <img src={contact_us} alt="contact img" />
                        </div>
                    </div>
                    <form>
                        <div>
                            <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                            <input
                                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder="" />
                        </div>

                        <div className="mt-8">
                            <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                            <input
                                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" />
                        </div>

                        <div className="mt-8">
                            <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                            <textarea
                                className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                        </div>

                        <div className="upload-container relative mt-2 flex items-center justify-between w-full">
                            <div
                                className="drop-area w-full rounded-md border-2 border-dotted border-gray-200 transition-all hover:border-blue-600/30 text-center"
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                            >
                                <label
                                    htmlFor="file-input"
                                    className="block w-full h-full text-gray-500 px-4 pt-6 text-sm cursor-pointer"
                                >
                                    Drop your files here or click to browse
                                </label>
                                <input
                                    name="files"
                                    type="file"
                                    id="file-input"
                                    accept="image/*,.doc,.docx,.pdf"
                                    className="hidden"
                                    onChange={handleFileChange}
                                    multiple
                                />
                                <div className="preview-container grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4">
                                    {filePreviews.map((preview, index) => (
                                        <div key={index} className="file-preview relative w-16 h-16 flex items-center justify-center my-2 group">
                                            {preview.url ? (
                                                <div
                                                    className="preview-image w-full h-full bg-cover bg-center rounded-md group-hover:opacity-80"
                                                    style={{ backgroundImage: `url(${preview.url})` }}
                                                ></div>
                                            ) : (
                                                <div className="file-icon w-full h-full bg-cover bg-center rounded-md group-hover:opacity-80">
                                                    <img src={getFileIcon(preview.type)} alt="file icon" />
                                                </div>
                                            )}
                                            <MdDeleteOutline
                                                className="absolute top-0 right-0 mt-1 mr-1 cursor-pointer text-red-600 opacity-0 group-hover:opacity-80"
                                                onClick={() => handleDelete(preview.name)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {errorMessage && <p className="text-red-500 mt-4 text-center font-semibold">{errorMessage}</p>}

                        <div className="mt-8">
                            <button
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
