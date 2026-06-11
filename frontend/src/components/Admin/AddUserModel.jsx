import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';

const AddUserModel = ({ setShowAddUser, setRefreshKey }) => {
    const API_URL = import.meta.env.VITE_API_URL
    const [loading, setLoading] = useState(false)

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: ""
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        });
    }
    const validatForm = () => {
        if (!user.firstName || !user.lastName || !user.email || !user.password || !user.role) {
            toast.error("All fields are required");
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user.email)) {
            toast.error("Invalid Email");
            return false;
        }

        return true
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("JSONstring", JSON.stringify(user));

        const formValid = validatForm()
        console.log("formValid", formValid)
        if (formValid) {
            try {
                setLoading(true)
                const token = localStorage.getItem('token')
                console.log("Token:", token);
                const response = await fetch(`${API_URL}/admin/users`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    credentials: "include",
                    body: JSON.stringify(user),
                })
                const data = await response.json();

                if (!response.ok) {
                    toast.error(data.message)
                    return
                }

                console.log("response",response)
                console.log("data",data)

                toast.success("User added successfully")
                setShowAddUser(false)
                setRefreshKey(prev => !prev);

            } catch (error) {
                toast.error("Something went wrong");
                console.error(error);
            } finally {
                setLoading(false)
                setUser({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    role: ""
                });
            }
        }

    }


    return (
        <div>
            <div className='bg-white rounded-2xl  space-y-5 md:min-w-100'>
                <div className='text-center space-y-2 flex flex-col items-center'>
                    <h1 className='text-2xl font-semibold'>Add User</h1>
                </div>

                <form onSubmit={handleSubmit} className='space-y-3'>
                    <div className='flex flex-col space-y-1'>
                        <label htmlFor="firstName" className='text-sm'>First Name</label>
                        <input type="text" name='firstName' value={user.firstName} onChange={handleInput} className='bg-gray-200 rounded-md py-2 px-3 text-sm border border-slate-300' placeholder='Jhon' />
                    </div>

                    <div className='flex flex-col space-y-1'>
                        <label htmlFor="lastName" className='text-sm'>Last Name</label>
                        <input type="text" name='lastName' value={user.lastName} onChange={handleInput} className='bg-gray-200 rounded-md py-2 px-3 text-sm border border-slate-300' placeholder='Doe' />
                    </div>

                    <div className='flex flex-col space-y-1'>
                        <label htmlFor="email" className='text-sm'>Email</label>
                        <input type="text" name='email' value={user.email} onChange={handleInput} className='bg-gray-200 rounded-md py-2 px-3 text-sm border border-slate-300' placeholder='abc@gmail.com' />
                    </div>

                    <div className='flex flex-col space-y-1'>
                        <label htmlFor="password" className='text-sm'>Password</label>
                        <input type="text" name='password' value={user.password} onChange={handleInput} className='bg-gray-200 rounded-md py-2 px-3 text-sm border border-slate-300' placeholder='' />
                    </div>

                    <div className='flex flex-col space-y-1'>
                        <label htmlFor="role" className='text-sm'>Role</label>
                        <select name="role" value={user.role}  onChange={handleInput} className='bg-gray-200 rounded-md py-2 px-3 text-sm border border-slate-300'>
                                <option value="">Select Role</option>
                            <option value="user">USER</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>


                    <hr className='border-b border-slate-300' />

                    <div className="flex justify-end gap-3">
                        <button
                            onClick={() => setShowAddUser(false)}
                            className="px-4 py-2 border rounded-lg hover:bg-gray-200 transition-all duration-300 cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button onClick={handleSubmit} className='px-4 py-2 border rounded-lg bg-green-500 hover:bg-green-800 text-white transition-all duration-300 cursor-pointer' >
                            {loading? "Addding..." : "Add"}
                        </button>
                    </div>
                </form>

            </div>
            {/* {loading && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-blue-500"></div>
    </div>
  </div>
)} */}

        </div>
    )
}

export default AddUserModel
