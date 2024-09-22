import React from 'react'
import useConversation from '../../zustand/useConversation.js'
import { useSocketContext } from '../../context/SocketContext.jsx';

function Chatuser() {
    const {selectedConversation} = useConversation();
    const {onlineUsers} = useSocketContext();
    // console.log(selectedConversation);
    const getOnlineUsersStatus = (userId)=>{
        return onlineUsers.includes(userId) ? "Online" : "Offline";
    }


    return (
        <div className='flex space-x-3 items-center justify-center h-[8vh] bg-gray-800 hover:bg-gray-700 duration-300'>
            <div className="avatar online">
                <div className="w-16 rounded-full">
                    {/* <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /> */}
                    <img src="https://tse2.mm.bing.net/th?id=OIP.tGnDvSfO-UHSOCb2_M2Q6AHaE7&pid=Api&P=0&h=220" />

                </div>
            </div>
            <div>
                <h1 className='text-xl'>{selectedConversation.fullname}</h1>
                {/* <h1 className='text-xl'>Akhil</h1> */}
                <span className='text-sm'>{getOnlineUsersStatus(selectedConversation._id)}</span>
            </div>
        </div>
    )
}

export default Chatuser