import { useEffect, useState } from "react";
import HomeLeft from "./HomeLeft"
import HomeMid from "./HomeMid"
import HomeRight from "./HomeRight"
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function Home(){
    const navigate = useNavigate();
    const [tokenData, setTokenData] = useState(null); 
    const [nameUser, setNameUser] = useState("");
    const [idUser, setIdUser] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3000/api/checkLogin", { withCredentials: true })
            .then(res => {
                    if(!res.data.success) return navigate("/login", { replace: true });
            })
            .catch(error => {
              console.error(error.response.data.message);
            });
      }, []);

    const getData = async () => {
            try {
                const response = await axios({
                    method: "get",
                    url: "http://localhost:3000/api/tokenRoute",
                    withCredentials: true,
                })
                setTokenData(response.data);
            } catch (error) {
                console.log('Error', error);
            }
        }
    
    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (tokenData && tokenData.data) 
            setIdUser(tokenData.data.id);
    }, [tokenData])

    useEffect(() => {
        if (tokenData && tokenData.data) 
            setNameUser(tokenData.data.name);
    }, [tokenData])
    
    return (
        <div className="grid grid-cols-[32%_36%_32%]">
            <div className="">
                <HomeLeft nameUser={nameUser}></HomeLeft>
            </div>
            <div className="">
                <HomeMid nameUser={nameUser} idUser={idUser}></HomeMid>
            </div>
            <div className="">
                <HomeRight></HomeRight>
            </div>
        </div>
    )
}

export default Home