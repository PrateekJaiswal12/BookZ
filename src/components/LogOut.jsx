import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const LogOut = () => {


    const {logOut} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
  
    const from = location.state?.from.pathname || "/"
    const handleLogOut = () => {
        logOut().then(()=>{
            alert("Signed Out Successfully!!")
          navigate(from, {replace:true})

        }).catch((error)=> {

        })
    }

  return (
    <div className='h-screen bg-cyan-100 flex items-center justify-center'>
        <button className='bg-red-700 px-8 py-2 text-white rounded hover:bg-red-600' onClick={handleLogOut} >Log out</button>
    </div>
  )
}

export default LogOut
