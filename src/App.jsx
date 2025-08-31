import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './screens/HomePage';
import ProfilePage from "./screens/ProfilePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "sonner";
import AddUserPage from './screens/AddUserPage';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path="/add-users" element={<AddUserPage />} />
      </Routes>
      {/* <Footer /> */}

      <Toaster position="bottom-right" richColors closeButton />
    </Router>
  );
}

export default App;
