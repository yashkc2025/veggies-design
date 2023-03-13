import logo from './logo.svg';
import './App.scss';
import Hero from './components/Hero.js';
import Navbar from './components/Navbar.js';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className='order'>
        <h1>Order Now ➜</h1>
      </div>
    </div>
  );
}

export default App;
