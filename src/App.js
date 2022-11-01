
import './App.css';
import './style/navbar.css'
import Hero from './components/Hero';
import Barra from './components/Barra';
import About from './components/About';
import Eventos from './components/Eventos';
import Big from './components/Big';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">   
    {/* <div className='navbar'> nav bar</div> */}
      <Barra />
      <Hero/>
      <About />
      <Eventos />

      <Big />
      <Footer />
    </div>
  );
}

export default App;
