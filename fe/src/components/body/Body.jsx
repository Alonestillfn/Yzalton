import { Routes, Route } from "react-router"

import Home from "./home/Home"
import Friend from "./friend/Friend"
import Video from './video/Video'
import Marketplace from './marketplace/Marketplace'
import Group from './group/Group'

function Body(){
    return (
        <div className="bg-[#1c1c1d] h-[92%] pt-[4%]">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/friend" element={<Friend></Friend>}></Route>
                <Route path="/video" element={<Video></Video>}></Route>
                <Route path="/marketplace" element={<Marketplace></Marketplace>}></Route>
                <Route path="/group" element={<Group></Group>}></Route>
            </Routes>
        
        </div>
    )
}

export default Body