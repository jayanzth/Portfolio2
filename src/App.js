import './App.css';
import About_me from './components/About_Me';
import Features from './components/Features';
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
      <Header/>
      <Profile/>
      <About_me/>
      <Projects/>
      <Features/>
    </div>
  );
}

export default App;
