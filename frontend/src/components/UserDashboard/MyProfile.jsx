import React, { useState, useRef, useEffect } from 'react'
import { useAuth } from '../../store/AuthContext';
import { toast } from 'react-toastify';

const MyProfile = () => {
    // const API_URL = "http://localhost:3500"
    const API_URL = import.meta.env.VITE_API_URL

    const token = localStorage.getItem('token')
    const [loading, setLoading] = useState(false)
    const [pwdLoading, setPwdLoading] = useState(false)
    const { user } = useAuth();
    const [isEdit, setIsEdit] = useState(false)
    const [changePassword, setChangePassword] = useState(false)
    const firstNameRef = useRef(null);
    const [userProfile, setUserProfile] = useState({
        firstName: "",
        lastName: "",
    })


    const [changePasswordData, setChangePasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });
    // console.log("userProfile", userProfile)
    useEffect(() => {
        if (user) {
            setUserProfile({
                firstName: user.firstName || "",
                lastName: user.lastName || "",
            });
        }
    }, [user]);

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUserProfile({
            ...userProfile,
            [name]: value,
        });
    }

    const handlePasswordChangeInput = (e) => {
        setChangePasswordData({
            ...changePasswordData,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        if (isEdit) {
            firstNameRef.current?.focus();
        }
    }, [isEdit]);

    const handleEdit = async () => {
        // console.log(userProfile)
        setLoading(true)
        try {
            const response = await fetch(`${API_URL}/user/profile`, {
                method: "PUT",
                body: JSON.stringify(userProfile),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            const data = await response.json()
            if (response.ok) {
                toast.success("Changes Saved")
                setIsEdit(false)
                setUserProfile(data.user)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error("Somthing went wrong")
            console.error(error)
        } finally {
            setLoading(false)
        }

    }

     const handleChangePassword = async () => {
        // console.log(userProfile)
        console.log(changePasswordData)
        if ( !changePasswordData.currentPassword || !changePasswordData.newPassword || !changePasswordData.confirmPassword ) { return toast.error("All fields are required"); }

        if ( changePasswordData.newPassword !== changePasswordData.confirmPassword ) { return toast.error("Confirm passwords do not match"); }

        setPwdLoading(true)

        try {
            const response = await fetch(`${API_URL}/user/change_password`, {
                method: "PUT",
                body: JSON.stringify({ currentPassword: changePasswordData.currentPassword, newPassword: changePasswordData.newPassword }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            const data = await response.json()
            if (response.ok) {
                toast.success("Password changed")
                setChangePassword(false)
                setChangePasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error("Somthing went wrong")
            console.error(error)
        } finally {
            setPwdLoading(false)
        }

    }



    return (
        <div className=' lg:px-20 xl:px-60'>
            <div className='bg-white p-3 md:p-10 rounded-2xl space-y-8 md:space-y-15'>
                <h1 className='font-bold text-2xl p-2'>My Profile</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8'>
                    <div className='space-y-1'>
                        <p>First Name</p>   
                        {isEdit ? (
                            <input
                                type="text"
                                name='firstName' value={userProfile.firstName} onChange={handleInput}
                                ref={firstNameRef} className="w-full bg-slate-200 p-4 rounded-2xl "
                            />
                        ) : (

                            <p className='bg-slate-200 p-4 rounded-2xl'>{userProfile.firstName}</p>
                        )}
                    </div>
                    <div className='space-y-1'>
                        <p>Last Name</p>
                        {isEdit ? (
                            <input
                                type="text"
                                name='lastName' value={userProfile.lastName} onChange={handleInput}
                                className="w-full bg-slate-200 p-3 md:p-4 rounded-xl md:rounded-2xl "
                            />
                        ) : (

                            <p className='bg-slate-200 p-3 md:p-4 rounded-xl md:rounded-2xl'>{userProfile.lastName}</p>
                        )}
                    </div>
                    <div className='space-y-1'>
                        <p>Email</p>
                        <p className='bg-slate-200 p-3 md:p-4 rounded-xl md:rounded-2xl'>{user?.email}</p>
                    </div>
                    <div className='space-y-1'>
                        <p>Role</p>
                        <p className='bg-slate-200 p-3 md:p-4 rounded-xl md:rounded-2xl uppercase'>{user?.role}</p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    {!isEdit ? (
                        <button
                            onClick={() => setIsEdit(true)}
                            className="bg-primary py-3 px-5 rounded-lg text-sm text-white cursor-pointer transition-all duration-300"
                        >
                            Edit Profile
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={handleEdit}
                                disabled={loading}
                                className="bg-green-600 py-3 px-5 rounded-lg text-sm text-white cursor-pointer transition-all duration-300"
                            >
                                {loading ? "Saving..." : "Save"}
                            </button>

                            <button
                                onClick={() => setIsEdit(false)}
                                className="bg-slate-500 py-3 px-5 rounded-lg text-sm text-white cursor-pointer transition-all duration-300"
                            >
                                Cancel
                            </button>
                        </>
                    )}
                    <button onClick={() => setChangePassword(true)} className='bg-slate-300 py-3 px-5 rounded-lg text-sm text-black font-semibold cursor-pointer'>Change password</button>
                </div>
            </div>

            {changePassword && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"

                >
                    <div
                        className="bg-white rounded-xl p-6 w-full max-w-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-lg font-bold text-[#0A183A] mb-2">
                            Change Password
                        </h2>
                        <div>
                            <div className='space-y-1'>
                                <p>Current Password</p>
                                <input
                                    type="text"
                                    name='currentPassword' value={changePasswordData.currentPassword} onChange={handlePasswordChangeInput}
                                    className="w-full bg-slate-200 p-4 rounded-2xl "
                                />

                            </div>
                            <div className='space-y-1'>
                                <p>New Password</p>
                                <input
                                    type="text"
                                    name='newPassword' value={changePasswordData.newPassword} onChange={handlePasswordChangeInput}
                                    className="w-full bg-slate-200 p-4 rounded-2xl "
                                />
                            </div>
                            <div className='space-y-1'>
                                <p>Confirm new Password</p>
                                <input
                                    type="text"
                                    name='confirmPassword' value={changePasswordData.confirmPassword} onChange={handlePasswordChangeInput}
                                    className="w-full bg-slate-200 p-4 rounded-2xl "
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 pt-5">
                            <button
                                onClick={() => setChangePassword(false)}
                                className="px-4 py-2 border rounded-lg hover:bg-gray-200 transition-all duration-300 cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button onClick={handleChangePassword} disabled={pwdLoading} className='px-4 py-2 border rounded-lg bg-blue-500 hover:bg-blue-700 text-white transition-all duration-300 cursor-pointer' >
                                {pwdLoading ? "Changging..." : "Change"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default MyProfile
