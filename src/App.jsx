import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import Perfil from './pages/Perfil';
import Head from "./components/Head";
import "./styles/theme.css";
import { ThemeProvider } from './context/ThemeContext';
import Banner from './components/Banner';



function App() {
  
  return (
    <>
    <ThemeProvider>
      <Router>
        <div className="app">
          <Head />
          <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Banner />} />
                <Route path="/perfil" element={<Perfil />} />
              </Routes>
            </main>
          {/*<Banner />*/}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
    </>
  )
}

export default App
