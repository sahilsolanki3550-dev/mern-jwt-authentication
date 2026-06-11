import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
  <section className='container mx-auto bg-slate-100 py-15 flex flex-col md:flex-row space-y-5 justify-between md:items-center px-5 md:px-10'>
    <div>
        <h3 className='text-primary font-bold text-2xl'>AuthFlow</h3>
        <p className='text-sm text-gray-600'>© 2026 AuthFlow. All rights reserved.</p>
    </div>
   <div className="flex flex-wrap gap-2 mt-4">

    <span className="px-3 py-1 rounded-full bg-blue-100 text-primary text-sm">
        React
    </span>

    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
        Node.js
    </span>

    <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm">
        MongoDB
    </span>

    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm">
        JWT
    </span>

</div>
    <div className="flex gap-4 items-center">

    <a
        href="mailto:sahilsolanki3550@gmail.com"
        className="h-11 w-11 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
        title="Email"
    >
        <FaEnvelope size={18} />
    </a>

    <a
        href="https://github.com/sahilsolanki3550-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="h-11 w-11 rounded-full bg-slate-300 text-slate-700 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all duration-300"
        title="GitHub"
    >
        <FaGithub size={18} />
    </a>

    <a
        href="https://www.linkedin.com/in/sahil-solanki-326652294/"
        target="_blank"
        rel="noopener noreferrer"
        className="h-11 w-11 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all duration-300"
        title="LinkedIn"
    >
        <FaLinkedin size={18} />
    </a>

</div>
  </section>
  )
}

export default Footer
