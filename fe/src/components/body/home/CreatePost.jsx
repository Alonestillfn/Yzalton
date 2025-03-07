import axios from 'axios'

import { useRef, useState } from 'react';
import avatar from '../../../assets/img/aGirl.png'
import PostImage from './PostImage';

function CreatePost( {onClose, e} ){
    const textareaRef = useRef();
    const [marginTop, setMarginTop] = useState(15);
    const [showPostImage, setShowPostImage] = useState(false);
    const [content, setContent] = useState("");
    const [images, setImageURL] = useState({ url: "", publicId: "" });
    const [visibility, setVisibility] = useState("Public");

    const visibilityItem = ["Public", "Friends", "Private"];
    const visibilityIcon = [
        "fa-solid fa-earth-asia mr-2",
        "fa-solid fa-user-group mr-[7%]",
        "fa-solid fa-lock mr-2",
    ]

    const handleOnInput = () => {
        const textarea = textareaRef.current;
        if (textarea){
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
            if(textarea.scrollHeight > 100) setMarginTop(5);
            else setMarginTop(15);
        }
    }

    const handleOverlayClick = (e) => {
        if(e.target.id === 'overlay') onClose();
    }

    const handleClickImage = () => {
        setShowPostImage(!showPostImage);
        if(images) setImageURL("");
    }

    const handleSubmit = async (e) => {
        try {
            await axios({
                method: 'post',
                url: "http://localhost:3000/api/postStatus",
                data: {
                    content,
                    images: images.url,
                    publicId: images.publicId,
                    visibility,
                },
                withCredentials: true,
            })
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    const handlePostImage = (url, publicId) => {
        setImageURL({url, publicId});
    }

    return (
        <div className="fixed inset-0 z-10 bg-black/80"
            id='overlay'
            onClick={handleOverlayClick}
        >
            <div 
                className="bg-[#252728] w-[70vh] m-auto rounded-md transition-all duration-400"
                style={{marginTop: `${marginTop}vh`}}
            >
                <div className="flex justify-between items-center p-2 border-b border-[#333334]">
                    <div className="grow text-center text-xl font-semibold -mr-3">
                        Create post
                    </div>
                    <div 
                        className="p-1 bg-[#3b3d3e] rounded-full px-3 text-xl hover:cursor-pointer hover:opacity-80"
                        onClick={onClose}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
                <div className='p-2 pb-4 px-4'>
                    <div className='flex items-centr font-medium'>
                        <img src={avatar} alt="avatar" className='w-10 h-10 object-cover rounded-full mr-3 mt-1'/>
                        <div>
                            <p className=''>Văn Tài</p>
                            <div className=' group relative text-[12px] bg-[#3b3d3e] p-1.5 py-0.5 rounded-sm w-20'>
                                <div className='flex items-center justify-between hover:cursor-pointer hover:opacity-85'>
                                    <i className={`${visibilityIcon[visibilityItem.indexOf(visibility)]} fa-solid fa-earth-asia mr-1 text-[10px]`}></i>
                                    <p className=' mr-1'>{visibility}</p>
                                    <i className="fa-solid fa-sort-down -mt-1"></i>
                                </div>
                                <div className='absolute hidden group-hover:block top-5.5 left-0 w-full bg-[#3b3d3e]'>
                                    {
                                        visibilityItem.map((item, index) => (
                                            <div 
                                                key={index} className='flex items-center hover:opacity-85 hover:cursor-pointer p-1.5 py-0.5'
                                                onClick={() => setVisibility(item)}
                                            >
                                                <i className={`${visibilityIcon[index]} mr-1 text-[10px]`}></i>
                                                {item}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <form action="post" className='mt-2' onSubmit={handleSubmit}>
                        <textarea 
                            ref={textareaRef}
                            placeholder="What's on your mind, Văn Tài?"
                            className='outline-none overflow-hidden w-full max-h-[25vh] break-words resize-none text-xl'
                            rows={3}
                            onInput={handleOnInput}
                            onChange={e => setContent(e.target.value)}
                        ></textarea>
                        { showPostImage && <PostImage onPost={(url, publicId) => handlePostImage(url, publicId)}></PostImage> }
                        <div className='flex justify-between items-center text-md font-semibold border border-[#65686c] px-3 py-2 rounded-lg mt-2'>
                            <div>
                                Add to your post
                            </div>
                            <div className='text-2xl'>
                                <i 
                                    className="fa-solid fa-file-image mr-2 text-green-600 hover:cursor-pointer hover:bg-[#333334] p-1.5 px-2 rounded-full"
                                    onClick={handleClickImage}
                                ></i>
                                <i className="fa-solid fa-ellipsis text-[#6e7274] hover:cursor-pointer hover:bg-[#333334] p-1.5 px-2 rounded-full"></i>
                            </div>
                        </div>
                        <button type='submit' className='mt-3 p-1 w-full bg-amber-600 rounded hover:opacity-90 hover:cursor-pointer'>Post</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;