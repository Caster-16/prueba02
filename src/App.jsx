import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import "./styles/theme.css";
import { ThemeProvider } from './context/ThemeContext';
import Perfil from './pages/Perfil';


import "./styles/theme.css";

function App() {
  
  return (
    <>
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navbar />
            <main>
              <Routes>
                <Route path="/perfil" element={<Perfil />} />
              </Routes>
            </main>
            <Footer />
        </div>
      </Router>
    </ThemeProvider>
    </>
  )
}

export default App
