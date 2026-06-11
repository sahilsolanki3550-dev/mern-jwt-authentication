import React from "react";
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
import {
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiTailwindcss,
} from "react-icons/si";

const AboutProject = () => {
  const features = [
    {
      icon: <FaUserCheck />,
      title: "User Authentication",
      description:
        "Secure registration and login system using JWT authentication and bcrypt password hashing.",
    },
    {
      icon: <FaUserShield />,
      title: "Role Based Access",
      description:
        "Separate Admin and User dashboards with protected routes and authorization middleware.",
    },
    {
      icon: <FaLock />,
      title: "Token Security",
      description:
        "Access Tokens stored securely and Refresh Tokens managed using HttpOnly cookies.",
    },
    {
      icon: <FaUsers />,
      title: "User Management",
      description:
        "Admins can view, add, edit, and delete users directly from the dashboard.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Protected APIs",
      description:
        "Every protected route validates JWT tokens before allowing access.",
    },
    {
      icon: <FaRocket />,
      title: "Auto Session Renewal",
      description:
        "Automatic refresh token flow ensures seamless user experience.",
    },
  ];

  const techStack = [
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiJsonwebtokens />,
      name: "JWT",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
  ];

  const securityFeatures = [
    "Passwords hashed using bcrypt",
    "JWT Access Token Authentication",
    "HttpOnly Refresh Token Cookies",
    "Protected API Routes",
    "Role-Based Authorization",
    "Automatic Token Refresh",
    "Secure Logout Flow",
    "Session Expiration Handling",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-800 overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 h-72 w-72 bg-cyan-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-96 right-10 h-72 w-72 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/2 h-72 w-72 bg-indigo-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-20">
          <div className="text-center">
            <span className="px-5 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-700 font-medium">
              MERN Authentication Project
            </span>

            <h1 className="mt-8 text-6xl md:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                AuthFlow
              </span>
            </h1>

            <p className="max-w-4xl mx-auto mt-8 text-lg md:text-xl text-slate-600 leading-8">
              A production-ready authentication and authorization system built
              using MERN Stack, JWT Authentication, Refresh Tokens, Role-Based
              Access Control, Protected APIs, and Admin Dashboard Management.
            </p>

            <div className="flex justify-center gap-5 mt-10 flex-wrap">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-blue-200">
                Authentication System
              </button>

              <button className="px-8 py-4 rounded-xl border border-slate-300 hover:border-blue-500 hover:bg-blue-50 transition duration-300">
                MERN Stack Project
              </button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                value: "12+",
                label: "REST APIs", 
                color: "text-blue-600",
              },
              {
                value: "2",
                label: "User Roles",
                color: "text-indigo-600",
              },
              {
                value: "JWT",
                label: "Authentication",
                color: "text-cyan-600",
              },
              {
                value: "100%",
                label: "Protected Routes",
                color: "text-green-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 shadow-lg rounded-3xl p-8 hover:scale-105 hover:border-blue-400 transition-all duration-300"
              >
                <h2 className={`text-5xl font-bold ${item.color}`}>
                  {item.value}
                </h2>
                <p className="mt-3 text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="bg-white border border-slate-200 shadow-xl rounded-3xl p-10">
            <h2 className="text-4xl font-bold mb-6">About The Project</h2>

            <p className="text-slate-600 text-lg leading-9">
              AuthFlow is a complete authentication and authorization solution
              built with industry-standard security practices. The application
              provides secure user registration, login, profile management,
              refresh token rotation, role-based authorization, protected API
              access, and a comprehensive admin dashboard for user management.
            </p>

            <p className="text-slate-600 text-lg leading-9 mt-6">
              The system demonstrates how modern web applications securely
              manage authentication sessions while maintaining an excellent user
              experience through automatic token renewal and seamless access
              control.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-bold">Core Features</h2>

            <p className="text-slate-600 mt-4">
              Everything required for a production-ready authentication system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-200 shadow-lg rounded-3xl p-8 hover:-translate-y-3 hover:border-blue-500 hover:shadow-xl transition-all duration-500"
              >
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-3xl text-white mb-6 group-hover:rotate-12 transition-all">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-7">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Security */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="bg-white border border-slate-200 shadow-xl rounded-3xl p-10">
            <div className="flex items-center gap-4 mb-10">
              <FaShieldAlt className="text-blue-600 text-4xl" />
              <h2 className="text-4xl font-bold">
                Security Highlights
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {securityFeatures.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-blue-500 transition"
                >
                  <FaCheckCircle className="text-green-500 text-xl" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-bold">
              Technology Stack
            </h2>

            <p className="text-slate-600 mt-4">
              Modern technologies powering the project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 shadow-lg rounded-3xl p-8 text-center hover:border-blue-500 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl flex justify-center text-blue-600 mb-4">
                  {tech.icon}
                </div>

                <h3 className="font-semibold text-lg">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <section className="border-t border-slate-200 py-10 text-center">
          <div className="flex justify-center items-center gap-3 text-slate-500">
            <FaCode />
            <span>
              Built using MERN Stack • JWT • Refresh Tokens • RBAC
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutProject;