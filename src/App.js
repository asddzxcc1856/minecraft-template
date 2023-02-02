import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Content from './Content';
import About from './About';
import Play from './Play';
import Other from './Other';
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';
import AOS from 'aos';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";



function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Content />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/play" element={<Play />}></Route>
        <Route path='/other' element={<Other />}></Route>
      </Routes>
      <Footer></Footer>

    </BrowserRouter>

  );
}

export default App;
