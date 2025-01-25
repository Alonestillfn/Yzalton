import Pic from '../../../assets/img/aGirl.png'
import Minji from '../../../assets/img/KimMinji.jpg'

function HomeLeft(){
    return (
        <div className='max-w-[35ch]'>
            <div className='pl-3 pt-2 pb-1  border-b border-b-orange-400'>
                <div className='flex items-center hover:bg-orange-400 p-1 rounded hover:cursor-pointer'>
                    <div className='mr-1'>
                        <img src={Pic} alt="image" className='w-10 h-10 rounded-3xl'/>
                    </div>
                    <div className='text-[1.1rem]'>
                        Văn Tài
                    </div>
                </div>
                <div className='flex mt-1 hover:bg-orange-400 p-1 pl-2 rounded hover:cursor-pointer'>
                    <div className='text-2xl mr-2'>
                        <i className="fa-solid fa-user-group w-8"></i>
                    </div>
                    <div className='text-[1.1rem]'>
                        Find friends
                    </div>
                </div>
                <div className='flex mt-1 hover:bg-orange-400 p-1 pl-2 rounded hover:cursor-pointer'>
                    <div className='text-2xl mr-2'>
                        <i className="fa-regular fa-bookmark w-8"></i>
                    </div>
                    <div className='text-[1.1rem]'>
                        Saved
                    </div>
                </div>
                <div className='flex mt-1 hover:bg-orange-400 p-1 pl-2 rounded hover:cursor-pointer'>
                    <div className='text-2xl mr-2'>
                        <i className="fa-regular fa-clock w-8"></i>
                    </div>
                    <div className='text-[1.1rem]'>
                        Memory
                    </div>
                </div>
                <div className='flex mt-1 hover:bg-orange-400 p-1 pl-2 rounded hover:cursor-pointer'>
                    <div className='text-2xl mr-2'>
                    <i className="fa-solid fa-users w-8"></i>
                    </div>
                    <div className='text-[1.1rem]'>
                        Group
                    </div>
                </div>
                <div className='flex mt-1 hover:bg-orange-400 p-1 pl-2 rounded hover:cursor-pointer'>
                    <div className='text-2xl mr-2'>
                        <i className="fa-solid fa-tv w-8"></i>
                    </div>
                    <div className='text-[1.1rem]'>
                        Video
                    </div>
                </div>
                <div className='flex mt-1 hover:bg-orange-400 p-1 pl-2 rounded hover:cursor-pointer'>
                    <div className='text-2xl mr-2'>
                        <i className="fa-solid fa-store w-8"></i>
                    </div>
                    <div className='text-[1.1rem]'>
                        Marketplace
                    </div>
                </div>
                <div className='flex mt-1 hover:bg-orange-400 p-1 pl-2 rounded hover:cursor-pointer'>
                    <div className='text-2xl mr-2'>
                        <i className="fa-solid fa-table-columns w-8"></i>
                    </div>
                    <div className='text-[1.1rem]'>
                        Feed table
                    </div>
                </div>
                <div className='flex mt-1 hover:bg-orange-400 p-1 pl-2 rounded hover:cursor-pointer'>
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
                    <div className='flex items-center mt-1 p-1 hover:bg-orange-400 hover:cursor-pointer rounded-lg'>
                        <img src={Minji} alt="image" className='w-10 h-10 bg-cover rounded-lg mr-2'/>
                        <h3>Title group</h3>
                    </div>
                    <div className='flex items-center mt-1 p-1 hover:bg-orange-400 hover:cursor-pointer rounded-lg'>
                        <img src={Minji} alt="image" className='w-10 h-10 bg-cover rounded-lg mr-2'/>
                        <h3>Title group</h3>
                    </div>
                    <div className='flex items-center mt-1 p-1 hover:bg-orange-400 hover:cursor-pointer rounded-lg'>
                        <img src={Minji} alt="image" className='w-10 h-10 bg-cover rounded-lg mr-2'/>
                        <h3>Title group</h3>
                    </div>
                    <div className='flex items-center mt-1 p-1 hover:bg-orange-400 hover:cursor-pointer rounded-lg'>
                        <img src={Minji} alt="image" className='w-10 h-10 bg-cover rounded-lg mr-2'/>
                        <h3>Title group</h3>
                    </div>
                </div>
            </div>
            <div className='h-9 ml-3 flex items-center font-semibold'>
                Made by Văn Tài
                <div className='pl-2'>
                    <a href="https://github.com/Alonestillfn/Yzalton" className='text-red-600 underline decoration-1 decoration-red-600'>source</a>
                </div>
            </div>
        </div>
        
        
    )
}

export default HomeLeft