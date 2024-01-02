import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import AboutUs from "./Pages/AboutUs"
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
    </Router>    
    </>
  );
}

export default App;
