import React from 'react'
import { useAuth } from '../../context/AuthProvider'
import toast from 'react-hot-toast';
export default function Logout() {
    const [authUser,setAuthUser] = useAuth();
    const handleLogout = () =>{
        try{
            setAuthUser({
                ...authUser,
                user:null,
            });
            localStorage.removeItem("Users");
            toast.success("Logout Successfully");
            setTimeout(()=>{
    
              window.location.reload();
            },3000);
            
        } catch(error){
            toast.error("Error:  " + error);
            setTimeout(()=>{},2000);
        }
    };
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md curser-pointer' onClick={handleLogout}>Logout</button>
    </div>
  )
}
