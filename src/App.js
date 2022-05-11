import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div >
  );
}

export default App;
