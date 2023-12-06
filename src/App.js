import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import AboutUs from "./Pages/AboutUs"
import ContactUs from './Pages/ContactUs';
import Register from "./Pages/Register";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/register' element={<Register />} />

      </Routes>
    </Router>    
    </>
  );
}

export default App;
