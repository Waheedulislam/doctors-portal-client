import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appoinment/Appointment';
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import SignUp from './Pages/Login/SignUp/SignUp';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyAppointments from './Pages/DashBoard/MyAppointments';
import MyReview from './Pages/DashBoard/MyReview';
import MyHistory from './Pages/DashBoard/MyHistory';
import Ussers from './Pages/DashBoard/Ussers';
import RequireAdmin from './Pages/Login/RequireAuth/RequireAdmin';
import AddDoctor from './Pages/DashBoard/AddDoctor';
import ManageDoctors from './Pages/DashBoard/ManageDoctors';
import Payment from './Pages/DashBoard/Payment';

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
        <Route path="dashboard" element={
          <RequireAuth>
            <DashBoard></DashBoard>
          </RequireAuth>
        } >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<RequireAdmin><Ussers></Ussers></RequireAdmin>}></Route>
          <Route path='addDoctor' element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path='manageDoctor' element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>

        </Route>

      </Routes>
      <ToastContainer />
    </div >
  );
}

export default App;
