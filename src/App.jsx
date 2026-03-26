import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MayoristaPage from './pages/MayoristaPage'
import ScrollToTop from './components/ScrollToTop'
import UbicacionesPage from './pages/UbicacionesPage'


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mayorista" element={<MayoristaPage />} />
        <Route path="/ubicaciones" element={<UbicacionesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App