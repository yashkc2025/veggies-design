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
        <a href='yashkc2025.github.io'>Order Now ➜</a>
      </div>
    </div>
  );
}

export default App;
