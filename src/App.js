
import Contact from './pages/contact';
import About from './pages/about';
import Index from './pages/index';
import Service from './pages/service';
import Enquiry from './pages/Enquiry';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Portfolio from './pages/portfolio';
import BookAppointment from './pages/BookAppointment';
import Profile from './pages/profile';
import Doctors from './pages/Doctors';

function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/book' element={<BookAppointment />} />
        <Route path='/Doctors' element={<Doctors />} />
        
      </Routes>
    </Router>

    
    </>
  );
}

export default App;
