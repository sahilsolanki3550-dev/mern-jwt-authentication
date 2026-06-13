import React from 'react'
import { Link } from 'react-router-dom'

const CtaSection = () => {
  return (
    <section className='font-inter container mx-auto mb-10 px-5 md:px-10 '>
        <div className='bg-black rounded-3xl space-y-8 flex flex-col py-15 px-5 items-center justify-center'>

        <h3 className='text-3xl text-white font-semibold'> Build Secure Applications with JWT Authentication </h3>
        <div className='grid grid-cols-2 md:flex gap-4'>
            <div className='bg-gray-800 text-white font-semibold text-sm rounded-full py-1 px-5'>JWT</div>
            <div className='bg-gray-800 text-white font-semibold text-sm rounded-full py-1 px-5'>Refresh token</div>
            <div className='bg-gray-800 text-white font-semibold text-sm rounded-full py-1 px-5'> Protected Routes  </div>
            <div className='bg-gray-800 text-white font-semibold text-sm rounded-full py-1 px-5'> MERN Stack</div>
        </div>
        <p className='text-white text-lg max-w-2xl text-center'> Explore a complete authentication system featuring secure login,
                    JWT access tokens, refresh token rotation, protected routes,
                    and role-based authorization for modern web applications.</p>
        
        <Link to='/docs' className='text-black bg-white py-3 px-6 font-semibold rounded-lg  shadow-sm
        hover:bg-primary
        hover:text-white
        hover:border-primary
        hover:shadow-lg
        hover:-translate-y-1
        hover:scale-105
        transition-all
        duration-300'>View Documentation</Link>
        </div>
    </section>
  )
}

export default CtaSection
