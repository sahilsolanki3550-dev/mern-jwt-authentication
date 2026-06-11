import React from 'react'
import {
    FaShieldAlt,
    FaLock,
    FaUsers,
    FaUserShield,
    FaReact,
    FaNodeJs,
    FaUserCheck,
    FaRocket,
    FaCode,
    FaCheckCircle,
} from "react-icons/fa";

const FeaturesSection = () => {
    return (
        <section className='container mx-auto px-5 md:px-10 py-5 md:py-15 space-y-6 font-inter'>
            <div className='space-y-2 flex flex-col justify-center items-center text-center md:text-left'>
                <h1 className='text-secondary text-3xl font-bold'>Bulletproof Authentication Features</h1>
                <p className=' text-gray-500'>Everything you need to secure your application from day one without reinventing the wheel.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='bg-neutral border border-gray-200 rounded-2xl p-10 space-y-4 hover:bg-primary hover:text-white transition-all duration-500 group hover:scale-105'>
                    <div className='bg-blue-200 rounded-xl h-10 w-10 relative flex items-center justify-center'>
                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="blue" color='blue' xmlns="http://www.w3.org/2000/svg" className='object-cover'>
                            <path d="M13 2C10.2386 2 8 4.23858 8 7C8 7.55228 8.44772 8 9 8C9.55228 8 10 7.55228 10 7C10 5.34315 11.3431 4 13 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H13C11.3431 20 10 18.6569 10 17C10 16.4477 9.55228 16 9 16C8.44772 16 8 16.4477 8 17C8 19.7614 10.2386 22 13 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H13Z" fill="blue" />
                            <path d="M3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11.2821C11.1931 13.1098 11.1078 13.2163 11.0271 13.318C10.7816 13.6277 10.5738 13.8996 10.427 14.0945C10.3536 14.1921 10.2952 14.2705 10.255 14.3251L10.2084 14.3884L10.1959 14.4055L10.1915 14.4115C10.1914 14.4116 10.191 14.4122 11 15L10.1915 14.4115C9.86687 14.8583 9.96541 15.4844 10.4122 15.809C10.859 16.1336 11.4843 16.0346 11.809 15.5879L11.8118 15.584L11.822 15.57L11.8638 15.5132C11.9007 15.4632 11.9553 15.3897 12.0247 15.2975C12.1637 15.113 12.3612 14.8546 12.5942 14.5606C13.0655 13.9663 13.6623 13.2519 14.2071 12.7071L14.9142 12L14.2071 11.2929C13.6623 10.7481 13.0655 10.0337 12.5942 9.43937C12.3612 9.14542 12.1637 8.88702 12.0247 8.7025C11.9553 8.61033 11.9007 8.53682 11.8638 8.48679L11.822 8.43002L11.8118 8.41602L11.8095 8.41281C11.4848 7.96606 10.859 7.86637 10.4122 8.19098C9.96541 8.51561 9.86636 9.14098 10.191 9.58778L11 9C10.191 9.58778 10.1909 9.58773 10.191 9.58778L10.1925 9.58985L10.1959 9.59454L10.2084 9.61162L10.255 9.67492C10.2952 9.72946 10.3536 9.80795 10.427 9.90549C10.5738 10.1004 10.7816 10.3723 11.0271 10.682C11.1078 10.7837 11.1931 10.8902 11.2821 11H3Z" fill="blue" />
                        </svg>
                    </div>
                    <h3 className='text-secondary text-2xl font-semibold transition-all duration-500  group-hover:text-white'>Secure Login</h3>
                    <p>Bcrypt hashed passwords, login rate-limiting, and automated account lockout for maximum protection against brute force.</p>

                </div>

                <div className='bg-neutral border border-gray-200 rounded-2xl p-10 space-y-4 hover:bg-primary hover:text-white transition-all duration-500 group hover:scale-105'>
                    <div className='bg-blue-200 rounded-xl h-10 w-10 relative flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                            <path
                                d="M12 2L4 5V11C4 16.5 7.4 21.2 12 22C16.6 21.2 20 16.5 20 11V5L12 2Z"
                                stroke="blue"
                                stroke-width="2"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M9 12L11 14L15 10"
                                stroke="blue"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>

                    <h3 className='text-secondary text-2xl font-semibold transition-all duration-500  group-hover:text-white'>JWT Authentication</h3>
                    <p>JSON Web Tokens stored in HttpOnly cookies to prevent XSS attacks. Seamlessly handle refresh tokens and session persistence.</p>

                </div>

                <div className='bg-neutral border border-gray-200 rounded-2xl p-10 space-y-4 hover:bg-primary transition-all duration-500 group hover:scale-105 hover:text-white'>
                    <div className='bg-blue-200 rounded-xl h-10 w-10 relative flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none">
                            <rect
                                x="3"
                                y="3"
                                width="8"
                                height="8"
                                rx="2"
                                stroke="blue"
                                stroke-width="2"
                            />
                            <rect
                                x="13"
                                y="3"
                                width="8"
                                height="5"
                                rx="2"
                                stroke="blue"
                                stroke-width="2"
                            />
                            <rect
                                x="13"
                                y="10"
                                width="8"
                                height="11"
                                rx="2"
                                stroke="blue"
                                stroke-width="2"
                            />
                            <rect
                                x="3"
                                y="13"
                                width="8"
                                height="8"
                                rx="2"
                                stroke="blue"
                                stroke-width="2"
                            />
                        </svg>
                    </div>
                    <h3 className='text-secondary text-2xl font-semibold transition-all duration-500 group-hover:text-white'>Admin Dashboard</h3>
                    <p>Complete user management suite with role-based access control (RBAC). Manage, block, and update users effortlessly.</p>

                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
