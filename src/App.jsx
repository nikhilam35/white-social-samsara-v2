import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CalculatorProvider } from './context/CalculatorContext.jsx';
import Navbar from './components/Navbar.jsx';
import InteractiveBackground from './components/InteractiveBackground.jsx';

// Pages
import Home from './pages/Home.jsx';
import Why from './pages/Why.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import CalculatorWrapper from './components/CalculatorWrapper.jsx';
import ZenDemo from './pages/demo/ZenDemo.jsx';
import WheelDemo from './pages/demo/WheelDemo.jsx';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <CalculatorProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white text-black font-sans selection:bg-black/20 relative">

          <Routes>
            <Route path="/calculator" element={<CalculatorWrapper />} />
            <Route path="/zen" element={<ZenDemo />} />
            <Route path="/wheel" element={<WheelDemo />} />
            <Route path="*" element={
              <>
                <InteractiveBackground />
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/why" element={<Why />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </>
            } />
          </Routes>
        </div>
      </Router>
    </CalculatorProvider>
  );
}

export default App;
