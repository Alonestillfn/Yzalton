import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import Girl from '../../assets/img/aGirl.png'

function Head(){
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios({
                method: "post",
                url: "http://localhost:3000/api/logout",
                withCredentials: true
            })
            navigate("/login");
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    return (
        <div className="grid grid-cols-[32%_36%_32%] fixed left-0 right-0 z-10 h-[8%] bg-[#252728] px-2 border-b border-[#3a3c3d]">
            <div className="flex ml-2 py-2">
                <div className="bg-amber-600 min-w-10 text-center rounded-4xl text-4xl mr-2">Y</div>
                <div className="flex grow  max-w-[60%] items-center bg-[#333334] text-gray-300 rounded">
                    <i className="fa-solid fa-magnifying-glass p-2"></i>
                    <input className=" max-h-[10vh] h-9 w-full focus:text-white outline-none" type="text" placeholder="Search on Yzalton"/>
                </div>
            </div>

            <div className="flex items-center text-2xl justify-around">
                <Link to='/home'>
                    <div className="hover:cursor-pointer hover:bg-[#333334] py-2 px-9 rounded-lg">
                        <i className="fa-solid fa-house"></i>
                    </div>
                </Link>
                <Link to='/friend'>
                    <div className="hover:cursor-pointer hover:bg-[#333334] py-2 px-9 rounded-lg">
                        <i className="fa-solid fa-user-group"></i>
                    </div>
                </Link>
                <Link to='/video'>
                    <div className="hover:cursor-pointer hover:bg-[#333334] py-2 px-9 rounded-lg">
                        <i className="fa-solid fa-tv"></i>
                    </div>
                </Link>
                <Link to='/marketplace'>
                    <div className="hover:cursor-pointer hover:bg-[#333334] py-2 px-9 rounded-lg">
                        <i className="fa-solid fa-store"></i>
                    </div>
                </Link>
                <Link to='/group'>
                    <div className="hover:cursor-pointer hover:bg-[#333334] py-2 px-9 rounded-lg">
                        <i className="fa-solid fa-users"></i>
                    </div>
                </Link>
            </div>

            <div className='flex items-center justify-end text-2xl '>
                <div className='mr-3 bg-[#333334] rounded-3xl px-2 py-1 hover:cursor-pointer hover:bg-[#464647]'>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className='mr-3 bg-[#333334] rounded-3xl px-2 py-1 hover:cursor-pointer hover:bg-[#464647]'>
                    <i className="fa-regular fa-message"></i>
                </div>
                <div className='mr-3 bg-[#333334] rounded-3xl px-2 py-1 hover:cursor-pointer hover:bg-[#464647]'>
                    <i className="fa-solid fa-bell"></i>
                </div>
                <div className='mr-3 relative rounded-3xl group px-2 py-1'>
                    <img src={Girl} alt="image" className='w-9 h-9 bg-cover rounded-3xl hover:cursor-pointer'/>
                    <div className='absolute bg-[#333334] hover:opacity-90 hover:cursor-pointer -right-[20%] hidden group-hover:block py-1 px-2 w-20 text-[16px]'
                        onClick={handleLogout}
                    >
                        Log out
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Head