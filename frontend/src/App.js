import React from "react";
import './App.css';
import Register from './pages/Forms/register'
import Login from './pages/Forms/login';
import { Routes, Route } from "react-router-dom";
import OTP from './pages/Forms/Otp'
import { Navbar } from "./components/navbar";
import { useState } from "react";
import Footer from "./components/Footer";
import Dashboard from "./pages/admin/Dashboard";
import About from "./pages/About";
import Landing from "./pages/LandingPage/Landing";
import Simple from "./pages/LandingPage/TenderInfo";
import EditProfile from './pages/EditProfile';
import ForgotPassword from "./pages/Forms/ForgotPassword";
import NotFound from "./pages/error";
import RatingForm from "./pages/Forms/ratingForm";



function App() {
  const [isLoggedin, setLogin] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  return (
    <>
      <Navbar />
      <Routes >
        <Route path="/" element={<Landing />} />
        <Route path="/error404" element={<NotFound />} />
        <Route path='/details' element={<Simple />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/login/forgotpassword" element={<ForgotPassword />} />
        <Route path='/editprofile' element={<EditProfile />} />
        <Route path='/give-rating' element={<RatingForm />} />
        <Route path="/login" element={isLoggedin ? <Dashboard /> : <Login currentId={currentId} setCurrentId={setCurrentId} />} />
      </Routes>
      <Footer />
    </>
  );
}


export default App;
