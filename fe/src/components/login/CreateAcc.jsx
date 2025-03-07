import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router";

function CreateAcc(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            axios({
                method: "post",
                url: "http://localhost:3000/api/createAcc",
                data: {
                    name,
                    email,
                    password,
                    rePassword
                }
            })
            alert("Register successfully!");
            navigate('/login');
        } catch (error) {
            alert("Register failed! Please try again!");
        }
    }

    const handleNavigate = () => {
        navigate('/login')
    }

    return (
        <form className="bg-[#c8d3dc] pt-[10vh] h-[100vh]"
            onSubmit={handleSubmit}
        >
            <div className="text-amber-600 font-bold text-5xl text-center pb-[5vh]">
                Yzalton
            </div>
            <div className="text-black flex items-center justify-center">
                <div className="bg-white w-[50vh]">
                    <div className="p-4 mb-1 border-b border-[#ccc]">
                        <input className="block mb-3 p-2 w-full rounded focus:outline-blue-400 border border-[#ccc]" 
                            type="text" required 
                            placeholder="Your name"
                            onChange={e => setName(e.target.value)}
                        />
                        <input className="block mb-3 p-2 w-full rounded focus:outline-blue-400 border border-[#ccc]" 
                            type="email" required 
                            placeholder="Email address or phone number"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input className="block mb-3 p-2 w-full rounded focus:outline-blue-400 border border-[#ccc]" 
                            type="password" required 
                            placeholder="New password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <input className="block mb-3 p-2 w-full rounded focus:outline-blue-400 border border-[#ccc]" 
                            type="password" required 
                            placeholder="Re-enter password"
                            onChange={e => setRePassword(e.target.value)}
                        />
                        <button type='submit' className='block p-1 w-full bg-amber-500  border-b border-[#ccc] rounded hover:opacity-90 hover:cursor-pointer'>Sign up</button>
                    </div>
                    <div className="flex justify-between px-4 pb-2">
                        <div className="hover:underline hover:cursor-pointer" onClick={handleNavigate}>
                            Already have an account?
                        </div>
                        <div className="hover:underline hover:cursor-pointer" onClick={handleNavigate}>
                            Login
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default CreateAcc