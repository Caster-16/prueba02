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
