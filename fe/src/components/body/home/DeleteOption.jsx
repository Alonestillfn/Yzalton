import axios from "axios";

function ShowOption({ userStatusId }){
    const handleDelete = async (e) => {
        await axios({
            method: "post",
            url: "http://localhost:3000/api/deletePost",
            data: {
                userStatusId
            }
        })
    }

    return (
        <div className="absolute rounded bg-[#3b3d3e] right-0 w-[12vh] text-sm">
            <div className="px-2 hover:opacity-90 hover:cursor-pointer" onClick={handleDelete}>
                Delete post
            </div>
        </div>
    )
}

export default ShowOption;
