import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/AuthContext'

const Login = () => {
    const { storeToken } = useAuth();
    const API_URL = import.meta.env.VITE_API_URL
    
    // const API_URL = "http://localhost:3500"
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        email: "",
        password: "",
    });


    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        });
    }

    const navigate = useNavigate();


    const validatForm = () => {
        if (!user.email || !user.password) {
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

        const formValid = validatForm()

        if (formValid) {
            try {
                setLoading(true)
                const response = await fetch(`${API_URL}/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify(user),
                })
                const data = await response.json();

                if (!response.ok) {
                    toast.error(data.message)
                    return
                }


                const accessToken = data.accessToken
                // console.log(data.accessToken)

                // localStorage.setItem('token', accessToken);
                // 3. UPDATED THIS LINE TO USE CONTEXT
                storeToken(accessToken);

                toast.success("Login successfull")
                if(data?.role === "admin"){
                    navigate('/admin/dashboard');
                }
                if(data?.role === "user"){
                navigate('/userDashboard');
                }

            } catch (error) {
                toast.error("Something went wrong");
                console.error(error);
            } finally {
                setLoading(false)
                setUser({
                    email: "",
                    password: "",
                });
            }
        }

    }

    return (
        <div className='bg-slate-100 '>
        <div className='container mx-auto pt-20 py-10 flex justify-center'>
            <div className='bg-white rounded-2xl  p-6 space-y-5 min-w-90'>
                <div className='text-center space-y-2 flex flex-col items-center'>
                    <h1 className='text-2xl font-semibold'>Welcome back</h1>
                    <p className='max-w-xs text-sm'>Please enter your details to sign in</p>
                </div>

                <form onSubmit={handleSubmit} className='space-y-3'>
                    <div className='flex flex-col space-y-1'>
                        <label htmlFor="firstName" className='text-sm'>Email</label>
                        <input type="text" name='email' value={user.email} onChange={handleInput} className='bg-gray-200 rounded-md py-2 px-3 text-sm border border-slate-300' placeholder='abc@gmail.com' />
                    </div>

                    <div className='flex flex-col space-y-1'>
                        <label htmlFor="password" className='text-sm'>Password</label>
                        <input type="text" name='password' value={user.password} onChange={handleInput} className='bg-gray-200 rounded-md py-2 px-3 text-sm border border-slate-300' placeholder='' />
                    </div>
                    <button type='submit' disabled={loading} className='bg-primary text-white py-2 w-full rounded-lg cursor-pointer'>{loading ? "Logging..." : "Login"}</button>
                </form>


                {/* <p className='text-slate-600 text-sm'>I agree to the <span className='text-primary'>Terms of Service</span> and <span className='text-primary'> Privacy Policy.</span></p> */}


                <hr className='border-b border-slate-300' />

                <p className='text-center'>Don't have an account? <Link to='/register' className='text-primary cursor-pointer'>Register</Link></p>


            </div>
            {loading && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-blue-500"></div>
    </div>
  </div>
)}
</div>
        </div>
    )
}

export default Login
