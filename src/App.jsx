import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import Perfil from './pages/Perfil';
import Head from "./components/Head";
import "./styles/theme.css";
import "./styles/shared.css";
import { ThemeProvider } from './context/ThemeContext';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Favorite from './pages/Favorite';
import Results from './pages/Results';
import BookDetail from './pages/BookDetail';
import ReaderPreview from './pages/ReaderPreview';
import Tienda from "./pages/Tienda";
import Sesion from "./pages/Sesion";
import Registro from "./pages/Registro";



function App() {
  
  return (
    <>
    <ThemeProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <div className="app">
          <Head />
          <Navbar />
            <main>
              <Routes>
                <Route path="/" element={
                    <>
                      <Banner />
                      <Cards />
                    </>
                  }
                />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/results" element={<Results />} />
                <Route path="/book/:id" element={<BookDetail />} />
                <Route path="/reader/:id" element={<ReaderPreview />} />
                <Route path="/tienda/:id" element={<Tienda />} />
                <Route path="/sesion" element={<Sesion />} />
                <Route path="/registro" element={<Registro />} />
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
