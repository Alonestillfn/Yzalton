import Pic from '../../../assets/img/aGirl.png'
import Pic2 from '../../../assets/img/MotNgayChangNang.png'
import T1 from '../../../assets/img/t1.jpg'
import CreatePost from './CreatePost'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ShowOption from './DeleteOption'

function HomeMid({ nameUser, idUser }){
    const dailyNewUsers = ["David", "Johnson", "Nino", "Sword"]
    const [showCreatePost, setShowCreatePost] = useState(false);
    const [showOption, setShowOption] = useState(null);
    const [userStatus, setUserStatus] = useState([]);
    
    const handleCreatePost = () => {
        setShowCreatePost(true);
    }

    const getPostFromUser = async () => {
        try {
            const response = await axios({
                method: "get",
                url: `http://localhost:3000/api/getPostedStatus/${idUser}`
            })
            setUserStatus(response.data.status);
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    const handleShowOption = (id) => {
        setShowOption(showOption => showOption === id ? null : id);
    }
    

    useEffect(() => {
        getPostFromUser();
    }, [userStatus]);

    return (
        <div className='relative mt-3 pb-20'>
            <div className='bg-[#252728] p-2 px-3 rounded-xl'>
                <div className='flex pb-3 border-b border-b-amber-500'>
                    <img className='w-10 h-10 rounded-3xl mr-2' src={Pic} alt="image" />
                    <div 
                        className='bg-[#333334] w-full h-10 rounded-3xl flex items-center text-gray-400 pl-3 hover:bg-[#3b3b3c] hover:cursor-pointer outline-none'
                        onClick={handleCreatePost}
                    >
                        {`What's on your mind, ${nameUser}?`}
                    </div>
                </div>
                <div className='flex mt-3 text-lg justify-around'>
                    <div className='hover:bg-[#333334] hover:cursor-pointer rounded p-2 px-4'>
                        <i className="fa-solid fa-video mr-2"></i>
                        Live video
                    </div>
                    <div className='hover:bg-[#333334] hover:cursor-pointer rounded p-2 px-4'>
                        <i className="fa-solid fa-images mr-2"></i>
                        Photo/video
                    </div>
                    <div className='hover:bg-[#333334] hover:cursor-pointer rounded p-2 px-4'>
                        <i className="fa-regular fa-face-laugh-beam mr-2"></i>
                        Feeling/activity
                    </div>
                </div>
                {
                    showCreatePost && <CreatePost onClose={() => setShowCreatePost(false)}></CreatePost>
                }
            </div>

            <div className='mt-4 flex overflow-auto scrollbar-hide'>
               <div className='bg-[#252728] rounded-lg hover:opacity-85 hover:cursor-pointer min-w-32'>
                    <div className='relative'>
                        <img src={Pic} alt="image" className='w-32 h-38 bg-cover rounded-t-lg'/>
                        <i className="fa-solid fa-circle-plus absolute -bottom-4 left-1/2 -translate-x-1/2 text-3xl text-amber-500 rounded-full border-4 border-cyan-700"></i>
                    </div>
                    <p className='mt-4 text-center mb-1'>
                        Create story
                    </p>
               </div>
                {
                    dailyNewUsers.map((dailyNewUser, index) => (
                        <div key={index} className='relative overflow-hidden rounded-lg ml-2.5 min-w-32 hover:cursor-pointer'>
                            <img src={Pic2} alt="image" className='object-cover w-32 h-50 rounded-lg  hover:scale-105 transition-transform duration-200'/>
                            <img src={Pic} alt="image" className='w-10 h-10 absolute top-2 left-2 rounded-full border-3 border-cyan-700'/>
                            <p className='absolute bottom-1.5 left-2'>{dailyNewUser}</p>
                        </div>
                    ))
                }
            </div>
            {
                userStatus.map((item, index) => (
                    <div key={index} className='mt-4 bg-[#252728] rounded-xl pb-1'>
                        <div className='flex items-center p-2 px-3'>
                            <img src={T1} alt="image" className='w-12 h-12 mr-2 rounded-full hover:cursor-pointer'/>
                            <div className='w-full'>
                                <div className='flex justify-between items-center'>
                                    <div className='hover:cursor-pointer hover:underline decoration-1 '>{item.name}</div>
                                    <div className='flex text-xl'>
                                        <div className='relative' onClick={() => handleShowOption(index)}>
                                            <i className="fa-solid fa-ellipsis mr-1 hover:cursor-pointer p-2 rounded-full hover:bg-[#333334]"></i>
                                            {
                                                showOption === index && <ShowOption userStatusId={userStatus[index]._id}></ShowOption>
                                            }
                                        </div>
                                        <i className="fa-solid fa-xmark hover:cursor-pointer p-2 px-3 rounded-full hover:bg-[#333334]"></i>
                                    </div>
                                </div>
                                <div className='flex items-center text-[#b0b3b8] text-[12px] -mt-2'>
                                    <div>3h</div>
                                    <div className='bg-[#b0b3b8] w-0.5 h-0.5 rounded-full mx-1.5'></div>
                                    <i className="fa-solid fa-earth-americas"></i>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <p className='px-3'>
                                {item.content}
                            </p>
                            <img src={item.images} alt="image" className='mt-2 w-full h-full'/>
                        </div>
                        <div className='flex justify-between mb-1 p-1 mx-3 border-b-[1px] border-[#65686c]'>
                            <div className='flex items-center '>
                                <i className="fa-solid fa-thumbs-up hover:cursor-pointer text-[10px] p-1 rounded-full bg-[#03a0fd]"></i>
                                <i className="fa-solid fa-heart hover:cursor-pointer text-[10px] p-1 rounded-full bg-[#f93140]"></i>
                                <p className='text-[#b0b3b8] ml-1 hover:cursor-pointer hover:underline decoration-1'>1.5k</p>
                            </div>
                            <div className='flex items-center text-[#b0b3b8]'>
                                <p className='mr-3 hover:cursor-pointer hover:underline decoration-1 '>7.6k comments</p>
                                <p className='hover:cursor-pointer hover:underline decoration-1 '>856 shares</p>
                            </div>
                        </div>
                        <div className='flex justify-around text-lg text-[#b0b3b8]'>
                            <div className='hover:cursor-pointer hover:bg-[#333334] py-1 px-9'>
                                <i className="fa-regular fa-thumbs-up mr-2"></i>
                                Like
                            </div>
                            <div className='hover:cursor-pointer hover:bg-[#333334] py-1 px-9'>
                                <i className="fa-regular fa-comment mr-2"></i>
                                Comment
                            </div>
                            <div className='hover:cursor-pointer hover:bg-[#333334] py-1 px-9'>
                                <i className="fa-solid fa-share mr-2"></i>
                                Share
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default HomeMid