import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='p-5 space-y-5 sticky top-16 flex flex-row md:flex-col'>

      <NavLink
        to="/admin/dashboard"
        className={({ isActive }) =>
          `text-center font-semibold rounded-xl py-3 px-5 ${
            isActive
              ? 'bg-blue-100 text-primary'
              : 'hover:bg-blue-100 hover:text-primary'
          }`
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/admin/profile"
        className={({ isActive }) =>
          `text-center font-semibold rounded-xl py-3 px-5 ${
            isActive
              ? 'bg-blue-100 text-primary'
              : 'hover:bg-blue-100 hover:text-primary'
          }`
        }
      >
        Profile
      </NavLink>

      <NavLink
        to="/admin/user_management"
        className={({ isActive }) =>
          `text-center font-semibold rounded-xl py-3 px-5 ${
            isActive
              ? 'bg-blue-100 text-primary'
              : 'hover:bg-blue-100 hover:text-primary'
          }`
        }
      >
        User Management
      </NavLink>

    </div>
  )
}

export default SideBar