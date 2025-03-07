import { useRef, useState } from "react";
import { uploadImageToCloudinary } from "../../../utils/UploadImage";

function PostImage({ onPost }){
    const fileInputRef = useRef(null);
    const [selectedImage, setSeletedImage] = useState(null);

    const handleClick = () => {
        fileInputRef.current.click();
    }

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file){
            const imageUrl = await uploadImageToCloudinary(file);
            setSeletedImage(imageUrl.imageURL);
            onPost(imageUrl.imageURL, imageUrl.imagePublicId);
        }
    }

    return (
        <div 
            className="w-full mt-1 p-4 flex justify-center rounded-lg border border-[#333334] hover:cursor-pointer hover:border-[#7a7f81]"
            onClick={handleClick}
        >
            <input 
                type="file" 
                className="hidden" 
                ref={fileInputRef}
                accept="image/*"
                onChange={handleFileChange}
            />
            {
                selectedImage ? (
                    <img src={selectedImage} alt="Selected" className="w-full h-50 object-cover"/>
                ) : (
                    <div className="text-[#7a7f81] font-medium">
                        <div className="text-center">
                            <i className="fa-solid fa-images"></i>
                        </div>
                        <div>
                            Post your image here
                        </div>
                    </div>
                )
            }
            
        </div>
    )
}

export default PostImage;