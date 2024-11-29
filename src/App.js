import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Join from './components/Join';
import Plans from './components/Plans';
import Programme from './components/Programme'
import Reasons from './components/Reasons';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Home />
      <Programme/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
