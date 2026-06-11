import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../store/AuthContext';
import { toast } from 'react-toastify';




const NavBar = () => {
  const { isLoggedIn, logout, user } = useAuth();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false)
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    logout();
    toast.success("Logged out successfully");
    setShowLogoutPopup(false)
    navigate('/login');
  };
  return (
    <>
      <header className='flex justify-between items-center py-3 px-5 font-inter shadow-xs container mx-auto bg-slate-100 sticky top-0 z-20'>
        <div className='text-[26px] text-primary font-bold'>AuthFlow</div>
        <nav className=' gap-8 hidden md:flex '>
          <NavLink to='/' className='hover:text-primary border-b-2 border-slate-100 hover:border-b-2 hover:border-primary transition-all duration-300'>Home</NavLink>
          <NavLink to='/about_project' className='hover:text-primary border-b-2 border-slate-100 hover:border-b-2 hover:border-primary transition-all duration-300'>AboutProject</NavLink>
          <NavLink to='/docs' className='hover:text-primary border-b-2 border-slate-100 hover:border-b-2 hover:border-primary transition-all duration-300'>Docs</NavLink>
          <NavLink to='/contact' className='hover:text-primary border-b-2 border-slate-100 hover:border-b-2 hover:border-primary transition-all duration-300'>Contact</NavLink>
        </nav>



        <div className='flex items-center gap-5'>
          {isLoggedIn ? (
            <>
              <Link to={user?.role === "admin" ? "/admin/dashboard" : "/userDashboard"} className='cursor-pointer h-9 w-9 bg-black text-white  text-xl uppercase flex items-center justify-center rounded-full'>{user?.firstName?.charAt(0) || ''}</Link>
              <button onClick={() => setShowLogoutPopup(true)} className='text-white bg-primary cursor-pointer font-medium rounded-xl px-6 py-2 hover:bg-[#1744a5] transition-all duration-300'>Logout</button>
            </>
          ) : (

            <>
              <Link to='/login' className='text-gray-700 font-medium hover:text-black transition-all duration-300'>Login</Link>
              <Link to='/register' className='text-white bg-primary font-medium rounded-xl px-6 py-2 hover:bg-[#1744a5] transition-all duration-300 '>Register</Link>
            </>
          )}


        </div>


      </header>

      <nav className='  flex gap-4 justify-center md:hidden p-3 bg-slate-100'>
        <NavLink to='/' className='hover:text-primary border-b-2 border-white hover:border-b-2 hover:border-primary transition-all duration-300'>Home</NavLink>
        <NavLink to='/about_project' className='hover:text-primary border-b-2 border-slate-100 hover:border-b-2 hover:border-primary transition-all duration-300'>AboutProject</NavLink>
          <NavLink to='/docs' className='hover:text-primary border-b-2 border-slate-100 hover:border-b-2 hover:border-primary transition-all duration-300'>Docs</NavLink>
          <NavLink to='/contact' className='hover:text-primary border-b-2 border-slate-100 hover:border-b-2 hover:border-primary transition-all duration-300'>Contact</NavLink>
      </nav>
      
      {showLogoutPopup && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowLogoutPopup(false)}
        >
          <div
            className="bg-white rounded-xl p-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold text-[#0A183A] mb-2">
              Confirm Logout
            </h2>

            <p className="text-sm text-gray-500 mb-6">
              Are you sure you want to logout?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowLogoutPopup(false)}
                className="px-4 py-2 border rounded-lg hover:bg-gray-200 transition-all duration-300 cursor-pointer"
              >
                Cancel
              </button>
              <button onClick={handleLogoutClick} className='px-4 py-2 border rounded-lg bg-red-600 hover:bg-red-800 text-white transition-all duration-300 cursor-pointer' >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  )
}

export default NavBar
