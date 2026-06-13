import React from 'react'
import AdminDashboard from '../components/Admin/AdminDashboard'
import SideBar from '../components/Admin/SideBar'
import { NavLink, Outlet } from 'react-router-dom'

const AdminDashboardContainer = () => {
  return (
    <div className='grid md:grid-cols-6 font-inter'>
      <div className='md:col-span-1 min-h-screen hidden md:block '>

        <SideBar />
      </div>

      <div className='flex justify-center gap-2 md:hidden'>
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            `text-center font-semibold rounded-xl py-3 px-4 ${isActive
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
            `text-center font-semibold rounded-xl py-3 px-5 ${isActive
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
            `text-center font-semibold rounded-xl py-3 px-5 ${isActive
              ? 'bg-blue-100 text-primary'
              : 'hover:bg-blue-100 hover:text-primary'
            }`
          }
        >
          User Management
        </NavLink>
      </div>
      

      <div className='md:col-span-5 bg-neutral min-w-0'>

        <Outlet />
      </div>
    </div>
  )
}

export default AdminDashboardContainer
