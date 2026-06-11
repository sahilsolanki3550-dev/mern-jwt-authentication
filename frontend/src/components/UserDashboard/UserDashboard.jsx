import React from 'react'
import { useAuth } from '../../store/AuthContext';
import MyProfile from './MyProfile';

const UserDashboard = () => {
    const { user } = useAuth();
    //  console.log("Dashboard User:", user);
    return (
        <section className='container mx-auto px-5 md:px-10 md:pt-30 py-10 font-inter space-y-10 bg-neutral'>
            <div className='flex flex-col justify-center items-center text-center space-y-2'>
                <h1 className='text-4xl font-semibold'>Welcome to your dashboard, {user?.firstName}</h1>
                <p className='text-slate-500 text-lg'>Manage your account information and security settings.</p>
            </div>

            <div className='grid grid-cols-2 gap-6 justify-center items-center md:px-60'>
                <div className='bg-gray-300 p-5 rounded-2xl'>
                    <h3 className='text-slate-800 text-sm font-semibold'>ACCOUNT STATUS</h3>
                    <p className='font-bold'>Active</p>
                </div>
                <div className='bg-gray-300 p-5 rounded-2xl'>
                    <h3 className='text-slate-800 text-sm font-semibold'>Authentication Type</h3>
                    <p className='font-bold'>JWT Protected</p>
                </div>
            </div>

            <MyProfile />
        </section>
    )
}

export default UserDashboard


