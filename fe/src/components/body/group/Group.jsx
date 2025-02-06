import GroupLeft from "./GroupLeft"
import GroupRight from "./GroupRight"

function Group(){
    return (
        <div className="grid grid-cols-[23%_77%] bg-[#1c1c1d]">
            <GroupLeft></GroupLeft>
            <GroupRight></GroupRight>   
        </div>
    )
}

export default Group