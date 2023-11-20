import Contact from "./pages/contact";
import About from "./pages/about";
import Index from "./pages";
import Service from "./pages/service";
import Enquiry from "./pages/Enquiry";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/portfolio";
import BookAppointment from "./pages/BookAppointment";
import Profile from "./pages/profile";
import Doctors from "./pages/Doctors";
import DoctorProfile from "./pages/DoctorProfile";
import Login from "./pages/login";
import Signup from "./pages/signup";
import PatientHistory from "./pages/PatientHistory";
import Main from "./pages/main";
import DoctorIndex from "./pages/Doctorindex";
import MyPatient from "./pages/mypatient";
import AppointmentDetails from './pages/AppointmentDetails';
import About2 from "./pages/about2";
import About3 from "./pages/about3";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Index />} />
          <Route path="/homedoc" element={<DoctorIndex />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/doctorprofile" element={<DoctorProfile />} />
          <Route path="/about2" element={<About2 />} />
          <Route path="/about3" element={<About3 />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/patienthistory" element={<PatientHistory />} />
          <Route path='/mypatient' element={<MyPatient />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/appointment-details/:id" element={<AppointmentDetails />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/book" element={<BookAppointment />} />
          <Route path="/Doctors" element={<Doctors />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
