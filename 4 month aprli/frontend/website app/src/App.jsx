// Bootstrap CSS - gives us ready made styles like buttons, cards, forms
import "bootstrap/dist/css/bootstrap.min.css"

// BrowserRouter - wraps the whole app so routing works
// Routes - container that holds all Route definitions
// Route - defines one page path like "/dashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// ToastContainer - shows popup notifications (success/error messages)
import { ToastContainer } from "react-toastify"

// Import all screen components
// Importing all page components
import Login from "./screen/Login"
import Register from "./screen/Register"
import Dashboard from "./screen/Dashboard"
import Item from "./screen/Item"

// Import Navbar and ProtectedRoute components
// AuthNavBar - the top navigation bar (hides on login/register pages)
import AuthNavBar from "./components/AuthNavBar"
import { ProtectedRoute, PublicRoute } from "./components/ProtectedRoute"

// ProtectedRoute - blocks page if user is not logged in
// PublicRoute - blocks login/register page if user is already logged in

const App = () => {
  return (
    // BrowserRouter wraps everything so all pages can use routing
    <BrowserRouter>
      <div>

        {/* Toast notification container - shows success/error popups */}
        {/* ToastContainer shows popup messages at top-right corner
            autoClose 3000 means popup disappears after 3 seconds */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          theme="light"
        />

        {/* Navbar - hides itself on login and register pages */}
        {/* AuthNavBar is shown on all pages except login and register */}
        <AuthNavBar />

        {/* Page Routes */}
        {/* Routes holds all the page paths of our app */}
        <Routes>
          {/* Public routes - no token needed */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected routes - redirect to login if no token */}
          {/* "/" is the login page
              Wrapped in PublicRoute so logged in users go to dashboard instead */}
          <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />

          {/* "/register" is the register page
              Wrapped in PublicRoute so logged in users go to dashboard instead */}
          <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

          {/* "/item" is protected - only logged in users can see it
              If no token, ProtectedRoute sends user back to login */}
          <Route
            path="/items"
            element={
              <ProtectedRoute>
                <Item />
              </ProtectedRoute>
            }

          />

          {/* "/dashboard" is protected - only logged in users can see it
              If no token, ProtectedRoute sends user back to login */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App