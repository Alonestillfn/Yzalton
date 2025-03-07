import Pic from '../../../assets/img/aGirl.png'
import Minji from '../../../assets/img/KimMinji.jpg'

function HomeLeft({ nameUser }){
    const homeFunction = ["Find friends", "Saved", "Memory", "Group", "Video", "Marketplace", "Feed table"]
    const homeFunctionIcon = [
        "fa-solid fa-user-group",
        "fa-regular fa-bookmark",
        "fa-regular fa-clock",
        "fa-solid fa-users",
        "fa-solid fa-tv",
        "fa-solid fa-store",
        "fa-solid fa-table-columns",
    ]
    const shortcutName = ["Coding group", "IT group", "Music group", "Anime group"]
    

    return (
        <div className='fixed top-[8%] left-0 right-[77%]'>
            <div className='pl-3 pt-2 pb-1  border-b border-b-transparent hover:border-b-orange-400'>
                <div className='flex items-center hover:bg-orange-400 p-1 rounded hover:cursor-pointer'>
                    <div className='mr-1'>
                        <img src={Pic} alt="image" className='w-10 h-10 rounded-3xl'/>
                    </div>
                    <div className='text-[1.1rem]'>
                        {`${nameUser}`}
                    </div>
                </div>
                {
                    homeFunction.map((homeFunctionItem, index) => (
                        <div key={index} className='flex items-center text-center mt-1 hover:bg-orange-400 p-1 pl-2 rounded hover:cursor-pointer'>
                            <div className='text-2xl mr-2'>
                                <i className={`${homeFunctionIcon[index]} w-8`}></i>
                            </div>
                            <div className='text-[1.1rem]'>
                                {homeFunctionItem}
                            </div>
                        </div>
                    ))
                }
                <div className='flex mt-1 items-center text-center hover:bg-orange-400 p-1 pl-2 rounded hover:cursor-pointer'>
                    <div className='text-2xl mr-2'>
                        <i className="fa-solid fa-angle-down w-8"></i>
                    </div>
                    <div className='text-[1.1rem]'>
                        More
                    </div>
                </div>
            </div>

            <div className=' ml-3'> 
                <div className='text-xl font-semibold'>
                    Your shortcut
                </div>
                <div>
                    {
                        shortcutName.map((shortcutNameItem, index) => (
                            <div key={index} className='flex items-center mt-1 p-1 hover:bg-orange-400 hover:cursor-pointer rounded-lg'>
                                <img src={Minji} alt="image" className='w-10 h-10 object-cover rounded-lg mr-2'/>
                                <h3>{shortcutNameItem}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='h-9 ml-3 mt-[1px] flex items-center font-semibold'>
                Made by 
                <div className='pl-2'>
                    <a href="https://github.com/Alonestillfn/Yzalton" className='text-red-600 underline decoration-1 decoration-red-600'>Văn Tài</a>
                </div>
            </div>
        </div>
        
        
    )
}

export default HomeLeft