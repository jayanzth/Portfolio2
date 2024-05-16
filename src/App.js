import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About_me from './components/About_Me';
import Features from './components/Features';
import New_Header from './components/New_Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <Router>

    
    <div className="App">
      <New_Header/>
      <Routes>
      <Route path="/" element={<Profile/>}/>
      <Route path="/projects" element={<Projects/>}/>

      <Route path="/features" element={<Features/>}/>
      <Route path="/skills" element={<Skills/>}/>
      </Routes>
      <Footer/>
      </div>
      </Router>
    
  );
}

export default App;
