import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Suspense } from "react";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  const isLoggedOut = true;
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
        <div>Logged In</div>
      )}
    </div>
  );
}

export default App;
