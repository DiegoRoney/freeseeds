
import './App.css';
import './style/navbar.css'
import Hero from './components/hero';
import Barra from './components/Barra';
import About from './components/About';
function App() {
  return (
    <div className="App">   
    {/* <div className='navbar'> nav bar</div> */}
      <Barra />
      <Hero/>
      <About />
    </div>
  );
}

export default App;
