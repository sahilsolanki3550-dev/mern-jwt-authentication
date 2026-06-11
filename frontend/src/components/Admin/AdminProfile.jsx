import React, { useState, useRef, useEffect } from 'react'
import { useAuth } from '../../store/AuthContext';
import { toast } from 'react-toastify';

const AdminProfile = () => {
        // const API_URL = "http://localhost:3500"
    const API_URL = import.meta.env.VITE_API_URL

    const token = localStorage.getItem('token')
    const [admin, setAdmin ] = useState(null);
 

    const getAdminDetail = async () => {
        try {
            if (!token) {
                console.log("No token found");
                return;
            }
            const response = await fetch(`${API_URL}/admin/profile`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            const data = await response.json()
            console.log(data)
            if (!response.ok) {
                throw new Error(data.message || "Failed to fetch admin detail");
            }

            setAdmin(data.admin)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        getAdminDetail()
    },[])

    return (
        <div className=' md:px-60 mb-30 md:mb-0'>
            <div className='bg-white p-3 md:p-10 rounded-2xl space-y-8 md:space-y-15'>
                <h1 className='font-bold text-2xl p-2'>My Profile</h1>
                <div className='grid grid-cols-2 gap-2 md:gap-8'>
                    <div className='space-y-1'>
                        <p>First Name</p>
                        

                            <p className='bg-slate-200 p-4 rounded-2xl'>{admin?.firstName}</p>
                     
                    </div>
                    <div className='space-y-1'>
                        <p>Last Name</p>
                        

                            <p className='bg-slate-200 p-3 md:p-4 rounded-xl md:rounded-2xl'>{admin?.lastName}</p>
                  
                    </div>
                    <div className='space-y-1'>
                        <p>Email</p>
                        <p className='bg-slate-200 p-3 md:p-4 rounded-xl md:rounded-2xl'>{admin?.email}</p>
                    </div>
                    <div className='space-y-1'>
                        <p>Role</p>
                        <p className='bg-slate-200 p-3 md:p-4 rounded-xl md:rounded-2xl uppercase'>{admin?.role}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default AdminProfile
