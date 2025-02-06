import Pic from '../../../assets/img/pic.png'
import Pic2 from '../../../assets/img/aGirl.png'

function FriendRight(){
    const usersRequest = ["Emma Martinez", "Nino Nakano", "Dark Sword"]
    const usersMayYouKnow = ["Liam Carter", "Sophia Williams", "Ezio Blackwood", "Aria Sterling", "Nathan Drake", "Celeste Moon", "Orion Frost"]

    return (
        <div className="bg-[#1c1c1d] p-[2%] px-[3%]">
            <div>
                <div className="flex items-center justify-between ">
                    <div className="font-bold text-2xl">
                        Friend requests
                    </div>
                    <div className="text-[#428ff1] p-3 hover:bg-[#333334] hover:cursor-pointer rounded-lg">
                        See all
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    {
                        usersRequest.map((user, index) => (
                            <div key={index} className='bg-[#252728] max-w-50 mt-2 rounded-xl mr-2'>
                                <img src={Pic} alt="image" className='min-w-50 rounded-t-xl object-cover hover:cursor-pointer hover:opacity-90'/>
                                <div className='p-2'>
                                    <div className='mb-1.5'>
                                        <div className='font-semibold text-lg hover:underline hover:cursor-pointer'>
                                            {user}
                                        </div>
                                        <div className='flex items-center text-sm text-[#b0b3b8] hover:underline hover:cursor-pointer'>
                                            <img src={Pic2} alt="image" className='w-5 h-5 mr-1 object-cover rounded-full'/>
                                            1 mutual friend
                                        </div>
                                    </div>
                                    <div className=''>
                                        <button type='button' className='block mb-1.5 p-1 w-full bg-amber-600 rounded hover:opacity-90 hover:cursor-pointer'>Confirm</button>
                                        <button type='button' className='block p-1 w-full bg-[#3b3d3e] rounded hover:opacity-90 hover:cursor-pointer'>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='mt-3'>
                <div className="flex items-center justify-between ">
                    <div className="font-bold text-2xl">
                        People may you know
                    </div>
                    <div className="text-[#428ff1] p-3 hover:bg-[#333334] rounded-lg">
                        See all
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    {
                        usersMayYouKnow.map((user, index) => (
                            <div key={index} className='bg-[#252728] max-w-50 mt-2 rounded-xl mr-2'>
                                <img src={Pic} alt="image" className='min-w-50 rounded-t-xl object-cover hover:cursor-pointer hover:opacity-90'/>
                                <div className='p-2'>
                                    <div className='mb-1.5'>
                                        <div className='font-semibold text-lg hover:underline hover:cursor-pointer'>
                                            {user}
                                        </div>
                                        <div className='flex items-center text-sm text-[#b0b3b8] hover:underline hover:cursor-pointer'>
                                            <img src={Pic2} alt="image" className='w-5 h-5 mr-1 object-cover rounded-full'/>
                                            1 mutual friend
                                        </div>
                                    </div>
                                    <div className=''>
                                        <button type='button' className='block mb-1.5 p-1 w-full bg-amber-600 rounded hover:opacity-90 hover:cursor-pointer'>Add friend</button>
                                        <button type='button' className='block p-1 w-full bg-[#3b3d3e] rounded hover:opacity-90 hover:cursor-pointer'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FriendRight