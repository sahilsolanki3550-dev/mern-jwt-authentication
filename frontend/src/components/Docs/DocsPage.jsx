import React from "react";
import {
  FaBook,
  FaServer,
  FaDatabase,
  FaUserShield,
  FaExchangeAlt,
  FaCode,
  FaLock,
  FaCheckCircle,
} from "react-icons/fa";

const DocsPage = () => {
  const apis = [
    { method: "POST", route: "/register", desc: "Register a new user account" },
    { method: "POST", route: "/login", desc: "Authenticate user and generate tokens" },
    { method: "POST", route: "/logout", desc: "Logout user and clear all tokens" },
    { method: "GET", route: "/refresh", desc: "Generate new access token" },

    { method: "GET", route: "/user/profile", desc: "Get user profile details" },
    { method: "PUT", route: "/user/profile", desc: "Update user profile" },
    { method: "PUT", route: "/user/change_password", desc: "Change User Password" },

    { method: "GET", route: "/admin/profile", desc: "Get admin profile details" },
    { method: "GET", route: "/admin/users", desc: "Get all users" },
    { method: "POST", route: "/admin/users", desc: "Create a new user" },
    { method: "PUT", route: "/admin/users", desc: "Update user details" },
    { method: "DELETE", route: "/admin/users", desc: "Delete user account" },
  ];

  const features = [
    "User Registration",
    "User Login",
    "JWT Authentication",
    "Refresh Token Authentication",
    "Protected Routes",
    "User Profile Management",
    "Admin Dashboard",
    "User Management CRUD",
    "Role Based Access Control",
    "Automatic Session Renewal",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-medium">
            <FaBook />
            Technical Documentation
          </div>

          <h1 className="mt-8 text-4xl md:text-6xl font-black text-primary">
            AuthFlow Documentation
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-slate-600">
            Complete documentation of authentication workflow,
            authorization system, API architecture, token lifecycle,
            role management, and backend security implementation.
          </p>
        </div>

        {/* Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Project Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-md"
              >
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500" />
                  <span>{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* API Documentation */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <FaServer className="text-blue-600 text-3xl" />
            <h2 className="text-3xl font-bold">
              API Endpoints
            </h2>
          </div>

          <div className="overflow-hidden bg-white border border-slate-200 rounded-3xl shadow-lg">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left p-5">Method</th>
                  <th className="text-left p-5">Route</th>
                  <th className="text-left p-5">Description</th>
                </tr>
              </thead>

              <tbody>
                {apis.map((api, index) => (
                  <tr
                    key={index}
                    className="border-t border-slate-200"
                  >
                    <td className="p-5">
                      <span className="px-3 py-1 rounded-lg bg-blue-100 text-blue-700 font-semibold">
                        {api.method}
                      </span>
                    </td>

                    <td className="p-5 font-mono text-indigo-600">
                      {api.route}
                    </td>

                    <td className="p-5 text-slate-600">
                      {api.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Authentication Flow */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <FaLock className="text-blue-600 text-3xl" />
            <h2 className="text-3xl font-bold">
              Authentication Flow
            </h2>
          </div>

          <div className="space-y-6">

            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md">
              <h3 className="font-bold text-xl mb-4">
                1. User Login
              </h3>

              <p className="text-slate-600 leading-8">
                User submits email and password. Backend verifies
                credentials using bcrypt password comparison.
                Upon successful authentication, an Access Token
                and Refresh Token are generated.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md">
              <h3 className="font-bold text-xl mb-4">
                2. Token Storage
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>• Access Token stored in Local Storage</li>
                <li>• Refresh Token stored in MongoDB</li>
                <li>• Refresh Token stored in HttpOnly Cookie</li>
                <li>• Cookie cannot be accessed through JavaScript</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md">
              <h3 className="font-bold text-xl mb-4">
                3. Protected API Access
              </h3>

              <p className="text-slate-600 leading-8">
                Frontend sends Access Token in Authorization Header.
                Backend verifyJWT middleware validates token before
                allowing access to protected routes.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md">
              <h3 className="font-bold text-xl mb-4">
                4. Role Verification
              </h3>

              <p className="text-slate-600 leading-8">
                Backend checks user role from decoded JWT payload.
                Admin users can access admin routes while normal
                users can access only user routes.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md">
              <h3 className="font-bold text-xl mb-4">
                5. Frontend Route Protection
              </h3>

              <p className="text-slate-600 leading-8">
                Frontend reads user.role and automatically redirects
                users to User Dashboard or Admin Dashboard after login.
              </p>
            </div>
          </div>
        </section>

        {/* Refresh Flow */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <FaExchangeAlt className="text-blue-600 text-3xl" />
            <h2 className="text-3xl font-bold">
              Refresh Token Flow
            </h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-lg">
            <div className="space-y-6 text-slate-600 leading-8">

              <p>
                Access Tokens are intentionally short-lived.
                When an Access Token expires, the frontend calls
                the <span className="font-mono text-blue-600">/refresh</span>
                endpoint.
              </p>

              <p>
                The Refresh Token stored inside the HttpOnly Cookie
                is automatically sent with the request.
              </p>

              <p>
                Backend verifies the Refresh Token, finds the
                associated user in MongoDB, validates the token,
                and generates a brand-new Access Token.
              </p>

              <p>
                Frontend stores the new Access Token inside Local Storage
                and continues making authenticated requests without
                requiring the user to login again.
              </p>

              <p>
                If the Refresh Token is expired, invalid, or removed,
                the user is fully logged out and redirected to Login.
              </p>
            </div>
          </div>
        </section>

        {/* Logout Flow */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <FaUserShield className="text-blue-600 text-3xl" />
            <h2 className="text-3xl font-bold">
              Logout Process
            </h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-lg">
            <ul className="space-y-4 text-slate-600">
              <li>✓ Clear Access Token from Local Storage</li>
              <li>✓ Remove Refresh Token from MongoDB</li>
              <li>✓ Clear HttpOnly Cookie</li>
              <li>✓ Clear User Context State</li>
              <li>✓ Redirect User to Login Page</li>
              <li>✓ Revoke Current Session</li>
            </ul>
          </div>
        </section>

        {/* Architecture */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <FaDatabase className="text-blue-600 text-3xl" />
            <h2 className="text-3xl font-bold">
              System Architecture
            </h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-lg">
            <div className="font-mono text-slate-700 leading-9 whitespace-pre-line">
{`React Frontend
     ↓
JWT Access Token
     ↓
Express Middleware (verifyJWT)
     ↓
Role Verification
     ↓
Protected Controllers
     ↓
MongoDB Database

Refresh Flow:
HttpOnly Cookie
     ↓
/refresh API
     ↓
Verify Refresh Token
     ↓
Generate New Access Token
     ↓
Frontend LocalStorage`}
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-20 border-t border-slate-200 pt-10 text-center text-slate-500">
          <div className="flex justify-center items-center gap-3">
            <FaCode />
            <span>
              AuthFlow Technical Documentation • MERN Stack • JWT • RBAC
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DocsPage;