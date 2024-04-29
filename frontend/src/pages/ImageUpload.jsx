import React, { useState, useEffect } from "react";
import { imageDb } from "../config/Config";
import { v4 } from "uuid";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  listAll,
} from "firebase/storage";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

const ImageUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedUrls, setUploadedUrls] = useState([]);
  const [selectedUrls, setSelectedUrls] = useState([]);

  useEffect(() => {
    // Fetch uploaded photo URLs from Firebase Storage
    listAll(ref(imageDb, "files"))
      .then((imgs) => {
        const promises = imgs.items.map((item) => getDownloadURL(item));
        Promise.all(promises).then((urls) => {
          setUploadedUrls(urls);
        });
      })
      .catch((error) => {
        console.error("Error fetching uploaded photos:", error);
      });
  }, []);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 3); // Limit to 3 files
    setSelectedFiles(files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setSelectedUrls(urls);
  };

  const handleClick = () => {
    selectedFiles.forEach((file) => {
      const imageRef = ref(imageDb, `files/${v4()}`);
      uploadBytes(imageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setUploadedUrls((urls) => [...urls, url]);
        });
      });
    });
  };

  const handleDeleteSelected = (index) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);

    // Remove the URL from the displayed selected images
    const updatedUrls = selectedUrls.filter((_, i) => i !== index);
    setSelectedUrls(updatedUrls);
  };

  const handleDeleteUploaded = (index) => {
    // If the file was uploaded, delete it from Firebase Storage
    const imageRef = ref(imageDb, `files/${index}`);
    deleteObject(imageRef)
      .then(() => {
        console.log("Image deleted successfully!");
        const updatedUrls = uploadedUrls.filter((_, i) => i !== index);
        setUploadedUrls(updatedUrls);
      })
      .catch((error) => {
        console.error("Error deleting image:", error);
      });
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-10">
        <NavBar />
      </div>
      <div className="flex">
        <div className="fixed top-[75px] left-0 h-screen z-10">
          <SideBar />
        </div>
        <div className="ml-96 w-full ">
          <div className=" space-y-10  mt-24  m-auto">
            <input type="file" onChange={handleFileChange} multiple />
            <button className="bg-gray-400" onClick={handleClick}>
              Upload
            </button>
            <br />
            {selectedUrls.map((url, index) => (
              <div key={index}>
                <img
                  src={url}
                  height="200px"
                  width="200px"
                  alt={`Uploaded ${index}`}
                />
                <button onClick={() => handleDeleteSelected(index)}>
                  Delete
                </button>
              </div>
            ))}
            {uploadedUrls.map((url, index) => (
              <div key={index}>
                <img
                  src={url}
                  height="200px"
                  width="200px"
                  alt={`Uploaded ${index}`}
                />
                <button onClick={() => handleDeleteUploaded(index)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
