import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appoinment/Appointment';
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import SignUp from './Pages/Login/SignUp/SignUp';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className='mx-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>} />
      </Routes>
    </div >
  );
}

export default App;
