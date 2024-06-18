
import './App.css';
import Experience from './components/Experience/Experience';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import TechStack from './components/TechStack/TechStack';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className='app'>
        <Navbar/>
        <HomePage/>
        <TechStack/>
        <Experience/>
        <Projects/>
        <Footer/>


    </div>
  )
}

export default App
