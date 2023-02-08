import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Home from './Containers/home';
import About from './Containers/about';
import Skills from './Containers/skills';
import Resume from './Containers/resume';
import Portfolio from './Containers/portfolio';
import Contact from './Containers/contact';
import Navbar from './components/navBar';
import particlesConfig from './helpers/particlesConfig';
import Theme from './components/theme';



function App() {


  const particlesInit = async (main) => {
    await loadFull(main)
  }

  let location = useLocation();
  const onlyonHomepage = location.pathname === '/';
  return (
    <div className="App">

      {/* particles js */}
      {
        onlyonHomepage && (
          <Particles id="particles" options={particlesConfig} init={particlesInit} />
        )}

      {/* {navbar component} */}
      <div className='App__navbar-wrapper'>

        <Navbar />
      </div>

      <div className='App__main-content-wrapper'>
        <Theme />
        <Routes>
          {/* create all route here */}
          <Route path='/' index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>



    </div>
  );
}

export default App;
