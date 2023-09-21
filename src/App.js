import { Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import AboutPage from './Pages/AboutPage';
import Catalogue from './Pages/Catalogue';
import TermsPage from './Pages/TermsPage';


function App() {


  return (
<>
  
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/catalogue' element={<Catalogue />}/>
          <Route path='/termsandconditions' element={<TermsPage />}/>
        </Routes>
        <Footer />

    
</>
  );
}

export default App;
