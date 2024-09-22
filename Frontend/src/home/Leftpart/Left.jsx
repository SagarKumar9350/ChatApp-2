import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

function Left() {
  return (
    <div className='w-[30%]  bg-blue-950 text-gray-50'>
        <Search/>
        <div className='overflow-y-auto no-scrollbar' style={{minHeight:"calc(84vh - 5vh)"}}>
        <Users/>
        </div>
        <Logout/>
    </div>
  )
}

export default Left