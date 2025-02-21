import React from "react";

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
    if (!isOpen) return null; // Hide modal if not open

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg relative">
                <button className="absolute top-2 right-2 text-black text-xl font-bold" onClick={onClose}>
                    ✖
                </button>
                <img src={imageUrl} alt="Preview" className="max-w-[90vw] max-h-[90vh] rounded-lg" />
            </div>
        </div>
    );
};

export default ImageModal;
