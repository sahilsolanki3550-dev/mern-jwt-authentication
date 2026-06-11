import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import AddUserModel from './AddUserModel'
import { useAuth } from '../../store/AuthContext'
import { useNavigate } from "react-router-dom";

const UserManagement = () => {
    const API_URL = import.meta.env.VITE_API_URL
    const [users, setUsers] = useState([])
    const [editUserId, setEditUserId] = useState(null)
    const [deleteUserId, setDeleteUserId] = useState(null)
    const [refreshKey, setRefreshKey] = useState(0);
    const [editLoading, setEditLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [loadingUsers, setLoadingUsers] = useState(false)
    const [showAddUser, setShowAddUser] = useState(false)
    const { user: authUser, logout } = useAuth();


    const [editUser, setEditUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        role: "",
    });

    const token = localStorage.getItem('token')

    const navigate = useNavigate();
    const getUsersList = async () => {
        try {
            setLoadingUsers(true)
            if (!token) {
                console.log("No token found");
                return;
            }
            const response = await fetch(`${API_URL}/admin/users`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || "Failed to fetch users");
            }

            setUsers(data.users)
        } catch (error) {
            console.error(error)
        } finally {
            setLoadingUsers(false)
        }
    }

    const filteredUsers = users.filter(user => {
        const fullName = `${user.firstName} ${user.lastName}`;

        return (
            user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            fullName.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (a.email === authUser?.email) return -1;
    if (b.email === authUser?.email) return 1;
    return 0;
});


    const deleteUser = async (id) => {
        try {
            setDeleteLoading(true)
            const response = await fetch(`${API_URL}/admin/users/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            const data = await response.json()
            console.log(data)
            if (!response.ok) {
                toast.error("Failed to delete")
            }

            setUsers(prev =>
                prev.filter(user => user._id !== id)
            );

            // // If current logged-in admin deleted himself
            // if (id.email === authUser?._id) {
            //     logout()
            //     toast.success("Your account has been deleted");
            //     navigate("/login");
            //     return;
            // }
            setRefreshKey(prev => !prev);
            toast.success("User deleted successfully")


        } catch (error) {
            console.error(error)
        } finally {
            setDeleteLoading(false)
        }

    }


    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setEditUser({
            ...editUser,
            [name]: value,
        });
    }


    const handleEdit = (id) => {
        const selectedUser = users.find((user) => user._id === id);

        if (!selectedUser) return;

        setEditUserId(id);

        setEditUser({
            firstName: selectedUser.firstName,
            lastName: selectedUser.lastName,
            email: selectedUser.email,
            role: selectedUser.role,
        });
    };

    const handleSave = async () => {
        try {
            setEditLoading(true)
            const response = await fetch(`${API_URL}/admin/users/${editUserId}`, {
                method: "PUT",
                body: JSON.stringify({
                    firstName: editUser.firstName,
                    lastName: editUser.lastName,
                    email: editUser.email,
                    role: editUser.role,
                }),
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            const data = await response.json()
            console.log(data)
            if (!response.ok) {
                toast.error("Failed to edit")
            }
            toast.success("User edited successfully")
            setRefreshKey(prev => !prev);

        } catch (error) {
            console.error(error)
        } finally {
            setEditUserId(null);
            setEditLoading(false)
        }
    }

    useEffect(() => {
        getUsersList()
    }, [refreshKey])


    return (
        <>
            <div className='p-5 md:p-8'>
                <div className='space-y-10'>
                    <div className='bg-white p-10 rounded-xl space-y-1 max-w-50'>
                        <p>Total Users</p>
                        <span className='font-semibold text-xl'>{users.length}</span>
                    </div>

                    <div className="space-y-6">

                        {/* Header */}
                        <div className="bg-white p-6 rounded-xl flex flex-col md:flex-row md:justify-between md:items-center shadow-sm">
                            <h1 className="text-2xl font-semibold">User Management</h1>

                            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-4 md:mt-0">
                                <input
                                    type="search"
                                    placeholder="Search User"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="bg-gray-100 px-4 py-2 rounded-lg border outline-none focus:ring-2 focus:ring-blue-500"
                                />

                                <button onClick={() => { setShowAddUser(true) }} className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
                                    + Add User
                                </button>

                            </div>
                        </div>

                        {/* Table */}
                        <div className="bg-white rounded-xl shadow-sm overflow-x-auto">

                            <table className="w-full">
                                <thead className="bg-gray-100">
                                    <tr className="text-left text-gray-600">
                                        <th className="px-6 py-4">First Name</th>
                                        <th className="px-6 py-4">Last Name</th>
                                        <th className="px-6 py-4">Email</th>
                                        <th className="px-6 py-4">CreatedAt</th>
                                        {/* <th className="px-6 py-4">Password</th> */}
                                        <th className="px-6 py-4">Role</th>
                                        <th className="px-6 py-4 text-center">Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {loadingUsers ? (
                                        <tr>
                                            <td colSpan="6" className="text-center py-10">
                                                Loading users...
                                            </td>
                                        </tr>
                                    ) : (
                                        sortedUsers.map((user) => (
                                            <tr className="border-b    hover:bg-blue-50
        transition-colors
        duration-200" key={user._id}>


                                                <td className="px-6 py-5">
                                                    {editUserId === user._id ? (
                                                        <input
                                                            type="text"
                                                            className="border max-w-22 rounded-sm p-1"
                                                            name='firstName'
                                                            value={editUser.firstName}
                                                            onChange={handleInput}
                                                        />
                                                    ) : (
                                                        user.firstName
                                                    )}
                                                </td>

                                                <td className="px-6 py-5">
                                                    {editUserId === user._id ? (
                                                        <input
                                                            type="text"
                                                            className="border max-w-22 rounded-sm p-1"
                                                            name='lastName'
                                                            value={editUser.lastName}
                                                            onChange={handleInput}
                                                        />
                                                    ) : (


                                                        user.lastName
                                                    )}
                                                </td>

                                                <td className="px-6 py-5">
                                                    {editUserId === user._id ? (
                                                        <input
                                                            type="text"
                                                            className="border max-w-40 rounded-sm p-1"
                                                            name='email'
                                                            value={editUser.email}
                                                            onChange={handleInput}
                                                        />
                                                    ) : (
                                                        user.email
                                                    )}
                                                </td>

                                                <td className="px-6 py-5 text-gray-600">
                                                    {new Date(user.createdAt).toLocaleString("en-IN")}
                                                </td>

                                                <td className="px-6 py-5">
                                                    {editUserId === user._id ? (
                                                        <select
                                                            value={editUser.role}
                                                            onChange={(e) =>
                                                                setEditUser({
                                                                    ...editUser,
                                                                    role: e.target.value,
                                                                })
                                                            }
                                                            className="border px-2 py-1 rounded"
                                                        >
                                                            <option value="user">User</option>
                                                            <option value="admin">Admin</option>
                                                        </select>
                                                    ) : (
                                                        <>
                                                            <span className="uppercase">{user.role}</span>

                                                            {user.email === authUser?.email && (
                                                                <span className="ml-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                                                                    Current
                                                                </span>
                                                            )}
                                                        </>

                                                    )}
                                                </td>

                                                <td className="px-6 py-5">
                                                    <div className="flex justify-center gap-4">
                                                        {editUserId === user._id ? (
                                                            <>

                                                                <button disabled={editLoading}
                                                                    onClick={() => handleSave()}
                                                                    className="text-blue-600 hover:text-blue-800 cursor-pointer"
                                                                >
                                                                    {editLoading ? "Saving..." : "Save"}

                                                                </button>

                                                                <button
                                                                    onClick={() => setEditUserId(null)}
                                                                    className="text-red-600 hover:text-red-800 cursor-pointer"
                                                                >
                                                                    Cancel
                                                                </button>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <button
                                                                    onClick={() => handleEdit(user._id)}
                                                                    className="text-blue-600 hover:text-blue-800 cursor-pointer"
                                                                >
                                                                    Edit
                                                                </button>

                                                                <button
                                                                    onClick={() => setDeleteUserId(user._id)}
                                                                    className="text-red-600 hover:text-red-800 cursor-pointer"
                                                                >
                                                                    Delete
                                                                </button>

                                                                {deleteUserId === user._id && (
                                                                    <div
                                                                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                                                                        onClick={() => setDeleteUserId(null)}
                                                                    >
                                                                        <div
                                                                            className="bg-white rounded-xl p-6 w-full max-w-md"
                                                                            onClick={(e) => e.stopPropagation()}
                                                                        >
                                                                            <h2 className="text-lg font-bold text-[#0A183A] mb-2">
                                                                                Confirm Delete
                                                                            </h2>

                                                                            <p className="text-sm text-gray-500 mb-6">
                                                                                Are you sure you want to delete this user?
                                                                            </p>

                                                                            <div className="flex justify-end gap-3">
                                                                                <button
                                                                                    onClick={() => setDeleteUserId(null)}
                                                                                    className="px-4 py-2 border rounded-lg hover:bg-gray-200 transition-all duration-300 cursor-pointer"
                                                                                >
                                                                                    Cancel
                                                                                </button>
                                                                                <button disabled={deleteLoading} onClick={() => deleteUser(user._id)} className='px-4 py-2 border rounded-lg bg-red-600 hover:bg-red-800 text-white transition-all duration-300 cursor-pointer' >
                                                                                    {deleteLoading ? "Deleting..." : "Delete"}
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>


                                        ))
                                    )}
                                </tbody>



                            </table>

                            {/* Footer */}
                            {/* <div className="flex justify-between items-center p-6 border-t">
                            <p className="text-gray-500">
                                Showing 2 of 12,482 users
                            </p>

                            <div className="flex gap-2">
                                <button className="px-4 py-2 border rounded-lg text-gray-400 cursor-not-allowed">
                                    Previous
                                </button>

                                <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
                                    Next
                                </button>
                            </div>
                        </div> */}

                        </div>

                    </div>
                </div>
            </div>


            {showAddUser && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" >
                    <div
                        className="bg-white rounded-xl p-6 w-full max-w-md"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <AddUserModel setShowAddUser={setShowAddUser} setRefreshKey={setRefreshKey} />

                    </div>
                </div>
            )}



        </>



    )
}

export default UserManagement
