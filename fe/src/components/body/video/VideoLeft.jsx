
function VideoLeft(){
    const videoDetail = ["Home", "Live", "Reels", "Shows", "Saved videos"]
    const videoIcon = [
        "fa-brands fa-youtube", 
        "fa-solid fa-video", 
        "fa-solid fa-film",
        "fa-solid fa-clapperboard", 
        "fa-solid fa-bookmark",]
    return (
        <div className="bg-[#252728]">
            <div className="fixed mt-[4.5%] top-0 left-0 right-[77%] pl-4 pr-2">
                <div className="flex items-center justify-between text-2xl py-1">
                    <div className="font-bold">Video</div>
                    <div className="px-2 rounded-full bg-[#333334] hover:opacity-80 hover:cursor-pointer">
                        <i className="fa-solid fa-gear text-xl"></i>
                    </div>
                </div>
                <div className="flex grow  max-w-[95%] my-1.5 items-center bg-[#333334] text-gray-300 rounded">
                    <i className="fa-solid fa-magnifying-glass p-2"></i>
                    <input className="h-9 w-full focus:text-white outline-none" type="text" placeholder="Search video"/>
                </div>
                
                <div className="ml-1 font-semibold text-lg">
                    {
                        videoDetail.map((video, index) => (
                            <div key={index} className="flex justify-between pl-3 p-4 -ml-4 rounded-lg hover:cursor-pointer hover:bg-[#333334]">
                                <div>
                                    <i className={`${videoIcon[index]} mr-2 text-xl`}></i>
                                    {video}
                                </div>
                                <div className="text-xl">
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}

export default VideoLeft