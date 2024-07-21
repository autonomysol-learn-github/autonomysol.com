/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { MdCancel } from "react-icons/md"; // Import MdCancel icon
import ex_files from '../../../../images/Microsoft/file.png';
import doc_file from '../../../../images/Microsoft/doc.png';
import pdf_file from '../../../../images/Microsoft/pdf.png';

interface FilePreview {
    name: string;
    type: string;
    size: number;
    base64?: string;
}

const UploadFiles = () => {
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
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const base64String = (reader.result as string).split(',')[1]; // Remove the prefix
                setFilePreviews(prev => [...prev, { name: file.name, type: file.type, size: file.size, base64: base64String }]);
            };
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

    useEffect(() => {
        // Log filePreviews whenever it changes
        console.log('File Previews:', filePreviews);
    }, [filePreviews]);

    return (
        <>
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
                    <div className="preview-container grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-4 lg:gap-4 p-4">
                        {filePreviews.map((preview, index) => (
                            <div
                                key={index}
                                className={`file-preview relative w-16 h-16 flex items-center justify-center my-2 group ${preview.type === 'application/pdf' || preview.type === 'application/msword' || preview.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ? 'border-2 border-gray-200 rounded-xl' : ''}`}
                            >
                                {preview.type.startsWith('image/') ? (
                                    <div
                                        className="preview-image w-full h-full bg-cover bg-center rounded-md group-hover:opacity-80"
                                        style={{ backgroundImage: `url(data:image/jpeg;base64,${preview.base64})` }}
                                    ></div>
                                ) : (
                                    <div className="file-icon w-12 h-12 bg-cover bg-center rounded-md group-hover:opacity-80">
                                        <img src={getFileIcon(preview.type)} alt="file icon" />
                                    </div>
                                )}
                                <MdCancel
                                    className="absolute top-0 right-0 mt-[-4px] mr-[-4px] cursor-pointer text-black opacity-0 group-hover:opacity-80 rounded-full bg-white"
                                    onClick={() => handleDelete(preview.name)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {errorMessage && <p className="text-red-500 mt-4 text-center font-semibold">{errorMessage}</p>}
        </>
    )
}

export default UploadFiles;
