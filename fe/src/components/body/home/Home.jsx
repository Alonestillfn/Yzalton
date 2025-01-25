import HomeLeft from "./HomeLeft"
function Home(){
    return (
        <div className="grid grid-cols-4 text-[#e2e5e9]">

            <HomeLeft></HomeLeft>
            <div className="col-span-2">
                b
            </div>
            <div>
                a
            </div>
        </div>
    )
}

export default Home