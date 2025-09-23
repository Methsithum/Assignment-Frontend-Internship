import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/rooms" element={<Rooms/>} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;