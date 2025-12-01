import React, { useEffect } from 'react'; // useEffect ഇമ്പോർട്ട് ചെയ്തു
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LatestEpisode from './components/LatestEpisode';
import Background from './components/Background';
import About from './components/About';
import Contact from './components/Contact';
import Support from './components/Support';
import Footer from './components/Footer';

function App() {

  // വെബ്സൈറ്റ് ലോഡ് ചെയ്യുമ്പോൾ ഈ കോഡ് പ്രവർത്തിക്കും
  useEffect(() => {
    // 1. Lenis Smooth Scroll സെറ്റപ്പ്
    const lenis = new window.Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. സ്ക്രോൾ ചെയ്യുമ്പോൾ സെക്ഷനുകൾ പൊങ്ങി വരുന്ന ആനിമേഷൻ (Intersection Observer)
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // എല്ലാ സെക്ഷനുകളെയും കണ്ടുപിടിച്ച് ആനിമേഷൻ കൊടുക്കുന്നു
    document.querySelectorAll('.section').forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(section);
    });

  }, []); // [] ഉള്ളതുകൊണ്ട് ഇത് ഒരു തവണ മാത്രമേ റൺ ആവൂ

  return (
    <div className="App">
      <Background />
      <Navbar />
      <Hero />
      <LatestEpisode />
      <About />
      <Contact />
      <Support />
      <Footer />
    </div>
  );
}

export default App;