import { useState } from "react"
import { replace, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios({
                method: "post",
                url: "http://localhost:3000/api/login",
                data: {
                    email,
                    password,
                },
                withCredentials: true,
            })
            alert("Login successfully!");
            navigate("/home", { replace: true });
        } catch (error) {
            alert(error.response.data.message);
        }
    }

    const handleCreateAcc = (e) => {
        navigate("/createAcc");
    }

    return (
        <form className="bg-[#36715b] pt-[10vh] h-[100vh]"
            onSubmit={handleSubmit}
        >
            <div className="text-amber-600 font-bold text-5xl text-center pb-[5vh]">
                Yzalton
            </div>
            <div className="text-black flex items-center justify-center">
                <div className="bg-white w-[50vh]">
                    <div className="p-4 mb-1 border-b border-[#ccc]">
                        <input className="block mb-3 p-2 w-full rounded focus:outline-blue-400 border border-[#ccc]" 
                            type="email" required 
                            placeholder="Email address or phone number"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input className="block mb-3 p-2 w-full rounded focus:outline-blue-400 border border-[#ccc]" 
                            type="password" required 
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button type='submit' className='block p-1 w-full bg-amber-500  border-b border-[#ccc] rounded hover:opacity-90 hover:cursor-pointer'>Log in</button>
                    </div>
                    <div className="flex justify-between px-4 pb-2">
                        <div className="hover:underline hover:cursor-pointer" onClick={handleCreateAcc}>
                            Create new account
                        </div>
                        <div className="hover:underline hover:cursor-pointer">
                            Forgotten password?
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login