import {React, useState} from 'react'
import { FaSearch } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import axios from "axios";
import Cookies from "js-cookie"
import toast from 'react-hot-toast';
// import { useNavigate } from "react-router-dom";
// import Login from '../../components/Login';





function Logout() {
    const [loading, setLoading ] = useState(false);
    // const navigate = useNavigate();
    
    const handleLogout = async ()=>{
        setLoading(true);
        try{
            const res = await axios.post("/api/user/logout");
            localStorage.removeItem("ChatApp");
            Cookies.remove("jwt");
            setLoading(false);
            toast.success("Logged out successfully")
            // alert("Logged out successfully")
            // navigate("/login");
        }
        catch(error){
            console.log("Error in Logout" + error);
            toast.error("Error in logging out")
        }
    };
    return (
        <div className='h-[5vh] bg-transparent fixed bottom-3'>
            <BiLogOutCircle className='text-5xl text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full p-2 m-l-2 mt-1'
            onClick = {handleLogout}
            />
            
        </div>
    )
}

export default Logout