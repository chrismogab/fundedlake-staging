import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Faq from './pages/Faq';
import ContactUs from './pages/ContactUs';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import useLenis from './hooks/useLenis';
import TopBar from './Components/TopBar';
import ScrollToTop from './Components/ScrollToTop';
import EmailPopup from './Components/EmailPopup';

function App() {
  useLenis();

  return (
    <Router>
      <ScrollToTop />
    <EmailPopup />
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/forex-expo" element={<forex-expo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
