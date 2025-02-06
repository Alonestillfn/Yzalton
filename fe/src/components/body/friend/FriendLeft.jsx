
function FriendLeft(){
    const friendDetail = ["Home", "Friend requests", "Suggestion", "All friends", "Birthday"]
    const friendIcon = ["fa-solid fa-user-group", 
        "fa-solid fa-user-plus", 
        "fa-solid fa-user-check", 
        "fa-solid fa-user-pen", 
        "fa-solid fa-cake-candles "]

    return (
        <div className="">
            <div className="fixed mt-[4.5%] top-0 left-0 right-[77%] pl-4 pr-2">
                <div className="flex items-center justify-between text-2xl py-1">
                    <div className="font-bold">Friends</div>
                    <div className="px-2 rounded-full bg-[#333334] hover:opacity-80 hover:cursor-pointer">
                        <i className="fa-solid fa-gear text-xl"></i>
                    </div>
                </div>
                
                <div className="ml-1 font-semibold text-lg">
                    {
                        friendDetail.map((friend, index) => (
                            <div key={index} className="flex justify-between pl-3 p-4 -ml-4 rounded-lg hover:cursor-pointer hover:bg-[#333334]">
                                <div>
                                    <i className={`${friendIcon[index]} mr-2 text-xl`}></i>
                                    {friend}
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

export default FriendLeft