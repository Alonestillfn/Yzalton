import FriendLeft from "./FriendLeft"
import FriendRight from "./FriendRight"

function Friend(){
    return (
        <div className="grid grid-cols-[23%_77%] bg-[#252728]">
            <FriendLeft></FriendLeft>
            <FriendRight></FriendRight>   
        </div>
    )
}

export default Friend