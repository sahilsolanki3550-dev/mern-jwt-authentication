import React from 'react'
import hero from '../../assets/hero.png';
import { Link } from 'react-router-dom';


const HeroSection = () => {
    return (
        <section className=' bg-neutral'>
            <div className='container mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 items-center py-10 gap-10'>
            <div className='space-y-5 flex flex-col text-center items-center md:text-start md:items-start '>
                <div className='flex max-w-55 items-center justify-between uppercase py-2 px-4 text-primary text-xs font-bold bg-slate-200 rounded-full border border-slate-300 '>
                    <svg
                        xmlns="http://w3.org"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="blue"
                        className="w-4 h-4 inline-block mr-1.5 align-text-bottom"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                    </svg>
                    Production Ready Auth
                </div>

                <h1 className='text-4xl md:text-5xl font-bold text-secondary md:leading-13 max-w-130'>
                    Secure <span className='text-primary'>JWT Authentication</span> System
                </h1>

                <p className=' max-w-130'>
                    An enterprise-grade MERN stack authentication boilerplate. Scalable, secure, and ready to deploy with pre-configured JWT strategy, cookie storage, and role-based access control.
                </p>

                <div className='pt-5 flex gap-5'>
                    <Link to='/login' className='bg-primary text-gray-100 px-6 py-3 rounded-xl text-sm  hover:shadow-lg hover:-translate-y-1
        hover:scale-105
        transition-all
        duration-300'>Try demo</Link>
                    <Link to='/docs' className='bg-white text-primary px-6 py-3 rounded-xl text-sm border border-gray-300 shadow-sm
        hover:bg-gray-500
        hover:text-white
        hover:border-gray-600
        hover:shadow-lg
        hover:-translate-y-1
        hover:scale-105
        transition-all
        duration-300 '>Doumentation</Link>
                </div>
            </div>
            <div >
                <div className="relative group">

                    {/* Glow Effect */}
                    <div className="absolute -inset-2 bg-linear-to-r from-blue-500/20 to-cyan-500/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                    <div className="relative overflow-hidden rounded-3xl bg-white p-3 shadow-2xl border border-slate-200">
                        <div className="h-70 md:h-90 lg:h-[520px] overflow-hidden rounded-2xl">
                            <img
                                src={hero}
                                alt="AuthFlow Dashboard"
                                className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110"
                            />
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </section>
    )
}

export default HeroSection
