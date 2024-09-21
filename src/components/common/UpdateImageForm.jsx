import React, { useState } from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

const ImageUploadForm = ({ name, onChange}) => {
  const [images, setImages] = useState([]);

  // Handle file selection 
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const updatedImages = files.map((file) => ({
      id: URL.createObjectURL(file), // Generate a temporary URL for preview
      file,
    }));
    // Update the images state
    setImages((prevImages) => [...prevImages, ...updatedImages]);
  };

  // Handle image deletion
  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div className="space-y-4 p-4">
      <label className="block py-5 text-xl font-medium text-gray-700">
        Media And Published
      </label>
      <div className="flex flex-wrap items-center gap-6 ">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative w-44 rounded-lg shadow-lg h-44 "
          >
            <img
              src={image.id}
              alt="Uploaded"
              className="object-cover w-full h-full rounded-lg"
            />
            <button
              type="button"
              onClick={() => handleDeleteImage(image.id)}
              className="absolute -top-5 -right-5 bg-red-500 rounded-full w-7 h-7 text-white text-xs"
            >
              &times;
            </button>
          </div>
        ))}
        <label className="flex flex-col items-center px-4 py-6 w-44 h-44 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white">
          <MdOutlineAddPhotoAlternate className="text-4xl mt-6" /> {/* Icon */}
          <span className="mt-5 text-base leading-normal">Select a file</span>
          <input type="file" name={name} className="hidden" onChange={handleFileChange}/>
        </label>
      </div>
      </div>
  );
};

export default ImageUploadForm;
