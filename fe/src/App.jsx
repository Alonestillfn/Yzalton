import { Routes, Route, Navigate, useNavigate } from 'react-router'

import './App.css'
import Login from './components/login'
import CreateAcc from './components/login/CreateAcc'
import Main from './components/main/Main'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const navigate = useNavigate();
  useEffect(() => {
      axios.get("http://localhost:3000/api/checkLogin", { withCredentials: true })
          .then(res => {
              if(res.data.user) return navigate("/home", { replace: true });
          })
          .catch(error => {
            console.error(error.response.data.message);
          });
  }, []);
  return (
    <div className='text-[#e2e5e9]'>
      <Routes>
        <Route path='/' element={<Navigate to='/home'></Navigate>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/createAcc' element={<CreateAcc></CreateAcc>}></Route>
        <Route path='/*' element={<Main></Main>}></Route>
      </Routes>
    </div>
  )
}

export default App
