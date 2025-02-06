import Cat from '../../../assets/img/Cat.png'
import t1 from '../../../assets/img/t1.jpg'
import avatar from '../../../assets/img/baka.webp'

function HomeRight(){
    const users = ["David Johnson", "Ethan Carter", "Lucas Anderson", "Oliver Bennett", "Lily Parker", "Sophia Reed", "Atomic Sword"]
    return (
        <div className="fixed right-0 left-[75%] mt-1 mr-2 text-[#b0b3b8] overflow-y-scroll pl-2 scrollbar-hide max-h-[92%] pb-5">
            <div className='pb-3.5 border-b border-[#65686c]'>
                <div className="text-lg mb-2">
                    Sponsored
                </div>
                <div className='flex items-center -ml-2 p-2 hover:bg-[#333334] hover:cursor-pointer'>
                    <img src={Cat} alt="image" 
                        className='min-w-[50%] max-w-[50%] h-30 object-cover mr-2 rounded-xl  '/>
                    <div>
                        <p className='text-[#e2e5e9]'>Cute cat do homework</p>
                        <p>webabc.com</p>
                    </div>
                </div>
                <div className='flex items-center mt-2 -ml-2 p-2 hover:bg-[#333334] hover:cursor-pointer'>
                    <img src={t1} alt="image" className='min-w-[50%] max-w-[50%] h-30 object-cover mr-2 rounded-xl'/>
                    <div>
                        <p className='text-[#e2e5e9] break-words'>Watch dramatic and exciting matches at</p>
                        <p>abcesport.com</p>
                    </div>
                </div>
            </div>
            <div className='pt-1'>
                <div className='flex justify-between items-center'>
                    <div className='text-lg'>Contacts</div>
                    <div className='flex text-xl'>
                        <i className="fa-solid fa-magnifying-glass mr-2 hover:cursor-pointer p-2 rounded-full hover:bg-[#333334]"></i>
                        <i className="fa-solid fa-xmark hover:cursor-pointer p-2 rounded-full hover:bg-[#333334]"></i>
                    </div>
                </div>
                <div className='text-[#e2e5e9]'>
                    {
                        users.map((user, index) => (
                            <div key={index} className='flex items-center -ml-2 p-3 hover:bg-[#333334] rounded-xl hover:cursor-pointer'>
                                <img src={avatar} alt="image" className='mr-2 w-10 h-10 object-cover rounded-full border border-b-indigo-400'/>
                                <div>{user}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeRight