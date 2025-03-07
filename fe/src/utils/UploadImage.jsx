

export const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Yzalton"); 

    const response = await fetch(
        `https://api.cloudinary.com/v1_1/dxstaddot/image/upload`,
        {
            method: "POST",
            body: formData,
        }
    );

    const data = await response.json();
    const imageURL = data.secure_url;
    const imagePublicId = data.public_id;
    return {
        imageURL,
        imagePublicId,
    };
};