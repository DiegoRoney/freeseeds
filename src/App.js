
import './App.css';
import './style/navbar.css'
import Hero from './components/hero';
import Barra from './components/Barra';
function App() {
  return (
    <div className="App">   
    {/* <div className='navbar'> nav bar</div> */}
      <Barra />
      <Hero/>
    </div>
  );
}

export default App;
