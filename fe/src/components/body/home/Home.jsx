import HomeLeft from "./HomeLeft"
import HomeMid from "./HomeMid"
import HomeRight from "./HomeRight"

function Home(){
    return (
        <div className="grid grid-cols-[32%_36%_32%]">
            <div className="">
                <HomeLeft></HomeLeft>

            </div>
            <div className="">
                <HomeMid></HomeMid>
            </div>
            <div className="">
                <HomeRight></HomeRight>
            </div>
        </div>
    )
}

export default Home