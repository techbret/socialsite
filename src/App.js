import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Suspense } from "react";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import EditProfile from "./pages/EditProfile";

function App() {
  const isLoggedOut = false;
  return (
    <div>
      {isLoggedOut ? (
        <Suspense fallback={<div>Loading</div>}>
          <NavBar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </Suspense>
      ) : (
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/*" element={<Dashboard />} />
          </Routes>
        </Suspense>
      )}
    </div>
  );
}

export default App;
