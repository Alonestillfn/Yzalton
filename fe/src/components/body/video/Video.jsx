import VideoLeft from './VideoLeft'
import VideoRight from './VideoRight'

function Video(){
    return (
        <div className="grid grid-cols-[23%_77%] bg-[#1c1c1d]">
            <VideoLeft></VideoLeft>
            <VideoRight></VideoRight>   
        </div>
    )
}

export default Video