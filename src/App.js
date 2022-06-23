import './App.css';
// import components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import {Route, Routes} from "react-router-dom"
// Import Pages
import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'

function App() {
  // URL should have your heroku url for your backend, make sure you include the trailing slash
  const URL = "https://enigmatic-hamlet-13400.herokuapp.com/"

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects URL={URL} />} />
        <Route path="/about" element={<About URL={URL} />} />
      </Routes>
      <Footer id="footer" />
    </div>
  );
}

export default App;
