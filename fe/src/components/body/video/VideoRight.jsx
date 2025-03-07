import Pic from '../../../assets/img/MotNgayChangNang.png'
import Balo from '../../../assets/videos/balo.mp4'

function VideoRight(){
    return (
        <div className='mt-3 min-h-[90ch]'>
            <div className='max-w-[65%] min-w-[65%] mx-auto bg-[#252728] rounded-md mt-3'>
                <div className='flex pt-3 px-3'>
                    <img src={Pic} alt="image" className='w-10 h-10 mr-1.5 object-cover rounded-full '/>
                    <div className='grow'>
                        <div className='flex justify-between'>
                            <div className='flex items-center'>
                                <div className='font-semibold hover:cursor-pointer hover:underline'>
                                    Lofi music daily
                                </div>
                                <div className='w-0.5 h-0.5 mx-1.5 bg-[#b0b3b8] rounded-full'></div>
                                <div className='text-[#428ff1] hover:cursor-pointer hover:underline'>
                                    Follow
                                </div>
                            </div>
                            <div>
                                <i className="fa-solid fa-ellipsis p-1.5 px-2 rounded-full hover:bg-[#333334] hover:cursor-pointer"></i>
                            </div>
                        </div>
                        <p className='text-[#b0b3b8] text-[12px] -mt-1'>February 3, 2025</p>
                    </div>
                </div>
                <div>
                    <p className='px-3 pb-1'>Lofi music today
                        <br />
                        Follow me for more music
                    </p>
                    <video className='w-full h-[500px] bg-[#333334] hover:cursor-pointer' src={Balo} controls autoPlay loop muted></video>
                </div>
                <div className='flex justify-between mb-1 p-2 mx-3'>
                    <div className='flex justify-around text-lg text-[#b0b3b8]'>
                        <div className='hover:cursor-pointer hover:bg-[#333334] py-1 px-4 rounded'>
                            <i className="fa-regular fa-thumbs-up mr-2"></i>
                            Like
                        </div>
                        <div className='hover:cursor-pointer hover:bg-[#333334] py-1 px-4 rounded'>
                            <i className="fa-regular fa-comment mr-2"></i>
                            Comment
                        </div>
                        <div className='hover:cursor-pointer hover:bg-[#333334] py-1 px-4 rounded'>
                            <i className="fa-solid fa-share mr-2"></i>
                            Share
                        </div>
                    </div>
                    <div className='flex items-center text-[12px]'>
                        <div className='flex items-center '>
                            <i className="fa-solid fa-thumbs-up hover:cursor-pointer text-[10px] p-1 rounded-full bg-[#03a0fd]"></i>
                            <i className="fa-solid fa-heart hover:cursor-pointer text-[10px] p-1 rounded-full bg-[#f93140]"></i>
                            <p className='text-[#b0b3b8] ml-0.5 hover:cursor-pointer hover:underline decoration-1'>1.5k</p>
                        </div>
                        <div className='w-0.5 h-0.5 rounded-full bg-[#b0b3b8] mx-1.5'></div>
                        <div className='flex items-center text-[#b0b3b8]'>
                            <p className=' hover:cursor-pointer hover:underline decoration-1 '>7.6k comments</p>
                            <div className='w-0.5 h-0.5 rounded-full bg-[#b0b3b8] mx-1.5'></div>
                            <p className='hover:cursor-pointer hover:underline decoration-1 '>546k views</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[65%] min-w-[65%] mx-auto bg-[#252728] rounded-md mt-3'>
                <div className='flex pt-3 px-3'>
                    <img src={Pic} alt="image" className='w-10 h-10 mr-1.5 object-cover rounded-full '/>
                    <div className='grow'>
                        <div className='flex justify-between'>
                            <div className='flex items-center'>
                                <div className='font-semibold hover:cursor-pointer hover:underline'>
                                    Lofi music daily
                                </div>
                                <div className='w-0.5 h-0.5 mx-1.5 bg-[#b0b3b8] rounded-full'></div>
                                <div className='text-[#428ff1] hover:cursor-pointer hover:underline'>
                                    Follow
                                </div>
                            </div>
                            <div>
                                <i className="fa-solid fa-ellipsis p-1.5 px-2 rounded-full hover:bg-[#333334] hover:cursor-pointer"></i>
                            </div>
                        </div>
                        <p className='text-[#b0b3b8] text-[12px] -mt-1'>February 3, 2025</p>
                    </div>
                </div>
                <div>
                    <p className='px-3 pb-1'>Lofi music today
                        <br />
                        Follow me for more music
                    </p>
                    <video className='w-full h-[500px] bg-[#333334] hover:cursor-pointer' src={Balo} controls autoPlay loop muted></video>
                </div>
                <div className='flex justify-between mb-1 p-2 mx-3'>
                    <div className='flex justify-around text-lg text-[#b0b3b8]'>
                        <div className='hover:cursor-pointer hover:bg-[#333334] py-1 px-4 rounded'>
                            <i className="fa-regular fa-thumbs-up mr-2"></i>
                            Like
                        </div>
                        <div className='hover:cursor-pointer hover:bg-[#333334] py-1 px-4 rounded'>
                            <i className="fa-regular fa-comment mr-2"></i>
                            Comment
                        </div>
                        <div className='hover:cursor-pointer hover:bg-[#333334] py-1 px-4 rounded'>
                            <i className="fa-solid fa-share mr-2"></i>
                            Share
                        </div>
                    </div>
                    <div className='flex items-center text-[12px]'>
                        <div className='flex items-center '>
                            <i className="fa-solid fa-thumbs-up hover:cursor-pointer text-[10px] p-1 rounded-full bg-[#03a0fd]"></i>
                            <i className="fa-solid fa-heart hover:cursor-pointer text-[10px] p-1 rounded-full bg-[#f93140]"></i>
                            <p className='text-[#b0b3b8] ml-0.5 hover:cursor-pointer hover:underline decoration-1'>1.5k</p>
                        </div>
                        <div className='w-0.5 h-0.5 rounded-full bg-[#b0b3b8] mx-1.5'></div>
                        <div className='flex items-center text-[#b0b3b8]'>
                            <p className=' hover:cursor-pointer hover:underline decoration-1 '>7.6k comments</p>
                            <div className='w-0.5 h-0.5 rounded-full bg-[#b0b3b8] mx-1.5'></div>
                            <p className='hover:cursor-pointer hover:underline decoration-1 '>546k views</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[65%] min-w-[65%] mx-auto bg-[#252728] rounded-md mt-3'>
                <div className='flex pt-3 px-3'>
                    <img src={Pic} alt="image" className='w-10 h-10 mr-1.5 object-cover rounded-full '/>
                    <div className='grow'>
                        <div className='flex justify-between'>
                            <div className='flex items-center'>
                                <div className='font-semibold hover:cursor-pointer hover:underline'>
                                    Lofi music daily
                                </div>
                                <div className='w-0.5 h-0.5 mx-1.5 bg-[#b0b3b8] rounded-full'></div>
                                <div className='text-[#428ff1] hover:cursor-pointer hover:underline'>
                                    Follow
                                </div>
                            </div>
                            <div>
                                <i className="fa-solid fa-ellipsis p-1.5 px-2 rounded-full hover:bg-[#333334] hover:cursor-pointer"></i>
                            </div>
                        </div>
                        <p className='text-[#b0b3b8] text-[12px] -mt-1'>February 3, 2025</p>
                    </div>
                </div>
                <div>
                    <p className='px-3 pb-1'>Lofi music today
                        <br />
                        Follow me for more music
                    </p>
                    <video className='w-full h-[500px] bg-[#333334] hover:cursor-pointer' src={Balo} controls autoPlay loop muted></video>
                </div>
                <div className='flex justify-between mb-1 p-2 mx-3'>
                    <div className='flex justify-around text-lg text-[#b0b3b8]'>
                        <div className='hover:cursor-pointer hover:bg-[#333334] py-1 px-4 rounded'>
                            <i className="fa-regular fa-thumbs-up mr-2"></i>
                            Like
                        </div>
                        <div className='hover:cursor-pointer hover:bg-[#333334] py-1 px-4 rounded'>
                            <i className="fa-regular fa-comment mr-2"></i>
                            Comment
                        </div>
                        <div className='hover:cursor-pointer hover:bg-[#333334] py-1 px-4 rounded'>
                            <i className="fa-solid fa-share mr-2"></i>
                            Share
                        </div>
                    </div>
                    <div className='flex items-center text-[12px]'>
                        <div className='flex items-center '>
                            <i className="fa-solid fa-thumbs-up hover:cursor-pointer text-[10px] p-1 rounded-full bg-[#03a0fd]"></i>
                            <i className="fa-solid fa-heart hover:cursor-pointer text-[10px] p-1 rounded-full bg-[#f93140]"></i>
                            <p className='text-[#b0b3b8] ml-0.5 hover:cursor-pointer hover:underline decoration-1'>1.5k</p>
                        </div>
                        <div className='w-0.5 h-0.5 rounded-full bg-[#b0b3b8] mx-1.5'></div>
                        <div className='flex items-center text-[#b0b3b8]'>
                            <p className=' hover:cursor-pointer hover:underline decoration-1 '>7.6k comments</p>
                            <div className='w-0.5 h-0.5 rounded-full bg-[#b0b3b8] mx-1.5'></div>
                            <p className='hover:cursor-pointer hover:underline decoration-1 '>546k views</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoRight