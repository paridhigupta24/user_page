
import Contact from './pages/contact';
import About from './pages/about';
import Index from './pages/index';
import Service from './pages/service';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Portfolio from './pages/portfolio';

function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        
      </Routes>
    </Router>

    
    </>
  );
}

export default App;
