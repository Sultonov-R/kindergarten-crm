import React, { useState } from "react";
import "./ImageUpload.css";

const ImageUpload = ({ label, onImageSelect }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        if (onImageSelect) {
          onImageSelect(file);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-upload">
      <label>{label}</label>
      <div className="image-preview">
        {imagePreview ? (
          <img src={imagePreview} alt="Selected" />
        ) : (
          <div className="image-placeholder">
            <img src="your-placeholder-image-url" alt="Placeholder" />
            <p>Rasmni kiriting</p>
          </div>
        )}
      </div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
};

export default ImageUpload;
