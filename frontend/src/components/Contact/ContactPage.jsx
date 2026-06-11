import React from "react";
import {
  FaComments,
  FaLightbulb,
  FaBug,
  FaRocket,
  FaCode,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

const ContactPage = () => {
  const cards = [
    {
      icon: <FaLightbulb />,
      title: "Feature Suggestions",
      description:
        "Share ideas for improving authentication workflows, dashboard functionality, or user experience.",
    },
    {
      icon: <FaBug />,
      title: "Bug Reports",
      description:
        "Found an issue? Report authentication, authorization, or dashboard-related problems.",
    },
    {
      icon: <FaCode />,
      title: "Development Discussion",
      description:
        "Discuss MERN stack architecture, JWT implementation, security practices, and project structure.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Security Feedback",
      description:
        "Provide recommendations regarding token handling, authentication flow, and access control.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 h-72 w-72 bg-cyan-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-96 right-10 h-72 w-72 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/2 h-72 w-72 bg-indigo-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-medium">
            <FaComments />
            Project Communication
          </div>

          <h1 className="mt-8 text-5xl md:text-6xl font-black text-slate-800">
            Get Involved
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-slate-600 leading-8">
            AuthFlow is a learning-focused MERN Stack authentication project.
            Feedback, ideas, bug reports, and improvement suggestions are always
            welcome to help make the project better.
          </p>
        </div>
        {/* Contact Information */}
<section className="mb-20">
  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg hover:border-blue-500 hover:shadow-xl transition-all">
      <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white text-xl mb-5">
        📧
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-3">
        Email
      </h3>

      <a
        href="mailto:sahilsolanki3550@gmail.com"
        className="text-blue-600 break-all hover:underline"
      >
        sahilsolanki3550@gmail.com
      </a>
    </div>

    <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg hover:border-blue-500 hover:shadow-xl transition-all">
      <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white text-xl mb-5">
        💻
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-3">
        GitHub
      </h3>

      <a
        href="https://github.com/sahilsolanki3550-dev"
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 hover:underline"
      >
        View GitHub Profile
      </a>
    </div>

    <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg hover:border-blue-500 hover:shadow-xl transition-all">
      <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white text-xl mb-5">
        💼
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-3">
        LinkedIn
      </h3>

      <a
        href="https://www.linkedin.com/in/sahil-solanki-326652294/"
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 hover:underline"
      >
        Connect on LinkedIn
      </a>
    </div>

  </div>
</section>
        {/* Contribution Areas */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {cards.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white text-2xl mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why This Project */}
        <section className="mb-20">
          <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-xl">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Why AuthFlow?
            </h2>

            <p className="text-slate-600 text-lg leading-9">
              AuthFlow was built to demonstrate a complete authentication and
              authorization system using modern web development practices.
              The project focuses on secure login systems, role-based access
              control, refresh token workflows, protected APIs, and scalable
              dashboard architecture.
            </p>

            <p className="text-slate-600 text-lg leading-9 mt-6">
              The goal is to provide a real-world example of how modern
              applications manage authentication securely while maintaining
              a smooth user experience.
            </p>
          </div>
        </section>

        {/* Future Roadmap */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <FaRocket className="text-blue-600 text-3xl" />
            <h2 className="text-3xl font-bold text-slate-800">
              Future Enhancements
            </h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Email Verification",
                "Forgot Password System",
                "Google OAuth Login",
                "Two Factor Authentication",
                "Account Activity Logs",
                "Advanced User Permissions",
                "Profile Image Upload",
                "Session Management Panel",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-200"
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Card */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center text-white shadow-xl">
            <h2 className="text-4xl font-bold mb-5">
              Thank You for Visiting
            </h2>

            <p className="max-w-3xl mx-auto text-lg leading-8 text-blue-50">
              This project showcases authentication, authorization,
              token management, protected routes, and admin-user role
              management using the MERN Stack. Continuous improvements
              and new features are planned as the project evolves.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;