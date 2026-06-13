import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useAuth } from '../../store/AuthContext'
import { useNavigate } from 'react-router-dom';



const Register = () => {
      const API_URL = import.meta.env.VITE_API_URL
          // const API_URL = "http://localhost:3500"

  const { storeToken } = useAuth();
  const [loading, setLoading] = useState(false)

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const navigate = useNavigate();
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  }


  const validatForm = () => {
    if (!user.firstName || !user.lastName || !user.email || !user.password || !user.confirmPassword) {
      toast.error("All fields are required");
      return false;
    }

    if (user.password !== user.confirmPassword) {
      toast.error("Confirm Passwords do not match");
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
        const response = await fetch(`${API_URL}/register`, {
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

        console.log(data)
        const accessToken = data.accessToken
        console.log(data.accessToken)

        // localStorage.setItem('token', accessToken);
        storeToken(accessToken);

        toast.success("Registration succes")
        navigate('/userDashboard');
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
          confirmPassword: ""
        });
      }
    }

  }

  return (
    <div className='bg-slate-100'>
    <div className='container mx-auto pt-20 py-10  flex justify-center '>
      <div className='bg-white rounded-2xl  p-6 space-y-5 md:min-w-100'>
        <div className='text-center space-y-2 flex flex-col items-center'>
          <h1 className='text-2xl font-semibold'>Create an account</h1>
          <p className='max-w-xs text-sm'>Join AuthFlow to start securing your developer workflow.</p>
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
            <label htmlFor="confimPassowrd" className='text-sm'>Confirm Password</label>
            <input type="text" name='confirmPassword' value={user.confirmPassword} onChange={handleInput} className='bg-gray-200 rounded-md py-2 px-3 text-sm border border-slate-300' placeholder='' />
          </div>

          <button type='submit' className='bg-primary text-white py-2 w-full rounded-lg cursor-pointer'>{loading? "Registering..." : "Register" }</button>

        </form>


        {/* <p className='text-slate-600 text-sm'>I agree to the <span className='text-primary'>Terms of Service</span> and <span className='text-primary'> Privacy Policy.</span></p> */}


        <hr className='border-b border-slate-300' />

        <p className='text-center'>Already have an account? <Link to='/login' className='text-primary cursor-pointer'>Login</Link></p>


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

export default Register
