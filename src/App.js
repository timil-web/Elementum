import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Offerings from './components/Offerings';
import Testimonials from './components/Testimonials';
import NewsletterFooter from './components/NewsletterFooter';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Offerings />
      <Testimonials />
      <NewsletterFooter />
    </>
  );
}

export default App;
