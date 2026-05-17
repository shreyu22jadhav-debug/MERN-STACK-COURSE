import { Navigate } from 'react-router-dom'

// ----------------------
// Protected Route
// ----------------------
// Used for pages that require login

export const ProtectedRoute = ({ children }) => {

  // Check token from localStorage
  const token = localStorage.getItem("token")

  // If token not found -> redirect to login
  if (!token) {
    return <Navigate to="/" replace />
  }

  // If token found -> show page
  return children
}


// ----------------------
// Public Route
// ----------------------
// Used for Login/Register pages

export const PublicRoute = ({ children }) => {

  // Check token from localStorage
  const token = localStorage.getItem("token")

  // If already logged in -> redirect dashboard
  if (token) {
    return <Navigate to="/dashboard" replace />
  }

  // If not logged in -> show login/register page
  return children
}