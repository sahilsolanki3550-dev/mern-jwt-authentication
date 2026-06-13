import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeContainer from './pages/HomeContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import RegisterContainer from './pages/RegisterContainer'
import LoginContainer from './pages/LoginContainer'
import { ToastContainer } from 'react-toastify';
import UserDashboardContainer from './pages/UserDashboardContainer'
import { Navigate } from "react-router-dom";
import { useAuth } from './store/AuthContext'
import AdminDashboardContainer from './pages/AdminDashboardContainer'
import AdminDashboard from './components/Admin/AdminDashboard'
import AdminProfile from './components/Admin/AdminProfile'
import UserManagement from './components/Admin/UserManagement'
import AboutPageContainer from './pages/AboutPageContainer'
import DocsPageContainer from './pages/DocsPageContainer'
import ContactPageContainer from './pages/ContactPageContainer'

function App() {
  const { isLoggedIn, user ,loading } = useAuth();
  // console.log("role", user?.role)


  if (loading) {
    return <h1>Loading...</h1>;
  }


  return (
    <>
    

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/about_project" element={<AboutPageContainer />} />
          <Route path="/docs" element={<DocsPageContainer />} />
          <Route path="/contact" element={<ContactPageContainer />} />
          <Route path="/register" element={isLoggedIn ? <Navigate to='/userDashboard' /> : <RegisterContainer />} />
          {/* <Route path="/login" element={isLoggedIn ? <Navigate to='/userDashboard' /> : <LoginContainer />} /> */}
          <Route
            path="/login"
            element={
              isLoggedIn
                ? (
                  user?.role === "admin"
                    ? <Navigate to="/admin/dashboard" />
                    : <Navigate to="/userDashboard" />
                )
                : <LoginContainer />
            }
          />
          <Route path="/userDashboard" element={isLoggedIn && user?.role === "user" ? <UserDashboardContainer /> : <Navigate to='/login' />} />
          
          <Route
            path="/admin"
            element={
              isLoggedIn && user?.role === "admin"
                ? <AdminDashboardContainer />
                : <Navigate to="/login" />
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="profile" element={<AdminProfile />} />
            <Route path="user_management" element={<UserManagement />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} /> 
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>

    </>
  )
}

export default App
