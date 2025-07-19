import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Feature from './components/Feature/Feature'
import AboutSecond from './components/OurAbout/AboutSecond';

function App() {
  return (
    <div>
      <Header />
      <section id="about">
        <About />
      </section>
      <section id="ourabout">aa
        <AboutSecond></AboutSecond>
      </section>
      <section id="features">
        <Feature></Feature>
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
