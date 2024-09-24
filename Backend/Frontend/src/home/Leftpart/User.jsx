import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';

function User({user}) {
  const {selectedConversation, setSelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const {socket ,onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
  return (
    <div className={`hover:bg-slate-600 duration-300 ${
      isSelected?"bg-slate-700":""
    }`}
    onClick={()=>setSelectedConversation(user)}
    >
        <div className='flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursor-pointer'>
            <div className={`avatar ${isOnline? "online" : ""} flex justify-center items-center`}>
            <div className="w-12 rounded-full">
                {/* <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /> */}
                <img src="https://tse2.mm.bing.net/th?id=OIP.tGnDvSfO-UHSOCb2_M2Q6AHaE7&pid=Api&P=0&h=220" />
             </div> 
            {/* <div className="bg-neutral text-neutral-content w-12 rounded-full">
            <span className="text-4xl ">Da</span>
            </div> */}
            </div>
            <div>
                <h1 className='font-bold'>{user.fullname}</h1>
                <span>{user.email}</span>
            </div>
        </div>
    </div>
  )
}

export default User