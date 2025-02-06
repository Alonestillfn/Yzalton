import Computer from '../../../assets/img/computer.png'


function GroupLeft(){
    return (
        <div className="bg-[#252728]">
            <div className="bg-[#252728] overflow-auto max-h-[92vh] scrollbar-hide fixed  mt-[4.5%] top-0 left-0 right-[77%] pl-4 pr-2 pb-10">
                <div className="flex items-center justify-between text-2xl py-1">
                    <div className="font-bold">Groups</div>
                    <div className="px-2 rounded-full bg-[#333334] hover:opacity-80 hover:cursor-pointer">
                        <i className="fa-solid fa-gear text-xl"></i>
                    </div>
                </div>
                <div className="flex grow  max-w-[95%] my-1.5 items-center bg-[#333334] text-gray-300 rounded">
                    <i className="fa-solid fa-magnifying-glass p-2"></i>
                    <input className="h-9 w-full focus:text-white outline-none" type="text" placeholder="Search groups"/>
                </div>
                <div className="font-semibold text-lg ml-1">
                    <div className="pl-3 p-4 -ml-4 rounded-lg hover:cursor-pointer hover:bg-[#333334]">
                        <i className="fa-solid fa-newspaper w-6 self-center mr-1"></i>
                        Your feed
                    </div>
                    <div className="p-3 -ml-4 rounded-lg hover:cursor-pointer hover:bg-[#333334]">
                        <i className="fa-brands fa-discourse w-6 self-center mr-1"></i>
                        Discover
                    </div>
                    <div className="p-3 -ml-4 rounded-lg hover:cursor-pointer hover:bg-[#333334]">
                        <i className="fa-solid fa-user-group w-6 self-center mr-1"></i>
                        Your groups
                    </div>
                </div>
                <div className="border-b border-[#65686c]">
                    <button type='button' className='block my-2 p-1 w-full bg-amber-600 rounded hover:opacity-90 hover:cursor-pointer'>+ Create new group</button>
                </div>
                <div className='pb-1.5 border-b border-[#65686c]'>
                    <div className='font-semibold text-lg my-1'>
                        Group you manage
                    </div>
                    <div className='flex items-center p-2 px-3 -ml-3 rounded hover:cursor-pointer hover:bg-[#333334]'>
                        <img src={Computer} alt="image" className='w-12 object-cover rounded-sm mr-2'/>
                        <div>
                            <p className='font-medium'>Coder</p>
                            <p className='text-[#b0b3b8] text-[12px]'>Last active 8 hours ago</p>
                        </div>
                    </div>
                    <div className='flex items-center p-2 px-3 -ml-3 rounded hover:cursor-pointer hover:bg-[#333334]'>
                        <img src={Computer} alt="image" className='w-12 object-cover rounded-sm mr-2'/>
                        <div>
                            <p className='font-medium'>Code selfmade one houndred %</p>
                            <p className='text-[#b0b3b8] text-[12px]'>Last active 12 hours ago</p>
                        </div>
                    </div>
                    <div className='flex items-center p-2 px-3 -ml-3 rounded hover:cursor-pointer hover:bg-[#333334]'>
                        <img src={Computer} alt="image" className='w-12 object-cover rounded-sm mr-2'/>
                        <div>
                            <p className='font-medium'>Sharing to help</p>
                            <p className='text-[#b0b3b8] text-[12px]'>Last active 13 hours ago</p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className="flex items-center justify-between ">
                        <div className="font-semibold text-lg">
                            Group you've joined
                        </div>
                        <div className="text-[#428ff1] p-3 hover:bg-[#333334] hover:cursor-pointer rounded-lg">
                            See all
                        </div>
                    </div>
                    <div className='flex items-center p-2 px-3 -ml-3 rounded hover:cursor-pointer hover:bg-[#333334]'>
                        <img src={Computer} alt="image" className='w-12 object-cover rounded-sm mr-2'/>
                        <div>
                            <p className='font-medium'>Oxytocin</p>
                            <p className='text-[#b0b3b8] text-[12px]'>Last active 13 hours ago</p>
                        </div>
                    </div>
                    <div className='flex items-center p-2 px-3 -ml-3 rounded hover:cursor-pointer hover:bg-[#333334]'>
                        <img src={Computer} alt="image" className='w-12 object-cover rounded-sm mr-2'/>
                        <div>
                            <p className='font-medium'>Cosplay là duyệt</p>
                            <p className='text-[#b0b3b8] text-[12px]'>Last active 13 hours ago</p>
                        </div>
                    </div>
                    <div className='flex items-center p-2 px-3 -ml-3 rounded hover:cursor-pointer hover:bg-[#333334]'>
                        <img src={Computer} alt="image" className='w-12 object-cover rounded-sm mr-2'/>
                        <div>
                            <p className='font-medium'>Dev ơi mình đi đâu thế?</p>
                            <p className='text-[#b0b3b8] text-[12px]'>Last active 13 hours ago</p>
                        </div>
                    </div>
                    <div className='flex items-center p-2 px-3 -ml-3 rounded hover:cursor-pointer hover:bg-[#333334]'>
                        <img src={Computer} alt="image" className='w-12 object-cover rounded-sm mr-2'/>
                        <div>
                            <p className='font-medium'>Epic Seven Việt Nam</p>
                            <p className='text-[#b0b3b8] text-[12px]'>Last active 13 hours ago</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default GroupLeft